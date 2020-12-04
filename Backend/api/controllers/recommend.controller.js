const Apt = require('../models/apt.model.js');
const User = require("../models/user.model.js");
const Userinfo = require("../models/userinfo.model.js");
const Ownership = require("../models/ownership.model.js");
const Preference = require("../models/preference.model.js");
const MonkeyLearn = require('monkeylearn')

const ml = new MonkeyLearn('7ccb6b43f1e827425595d9dcfd7e3cefc1806d21')
const model_id = 'ex_YCya9nrn'

exports.recommend = (req, res) => {
  const userId = req.params.UserID
  Ownership.findByUserId(userId, (ownershipErr, ownershipData) => {
    if (ownershipErr) {
      if (ownershipErr.kind !== "not_found") {
        res.status(500).send({
          message: "Error retrieving ownership with Userid " + userId
        });
        return;
      } 
      // if renter does not own an apartment
      recommendWithoutApt(userId, (recErr, recData) => {
        if (recErr) {//TODO
          res.status(500).send({
            message: recErr.message || "Error in recommending roommates"
          });
        } else {
          res.send(recData);
        }
      });
      return;
    } 

    // if renter owns an apartment
    Apt.findOne(ownershipData[0].AptID, (aptErr, aptData) => {
      if (aptErr) {
        res.status(500).send({
          message: aptErr.message || "Error retrieving apartment with AptId"
        });
        return;
      }
      
      recommendWithApt(userId, aptData, (recErr, recData) => {
        if (recErr) {//TODO
          res.status(500).send({
            message: recErr.message || "Error in recommending roommates"
          });
        } else {
          res.send(recData);
        }
      });
    });
  });
}

// recommend roommates to users without an apartment
const recommendWithoutApt = (userId, result) => {
  Preference.findById(userId, (preferenceErr, preferenceData) => {
    if (preferenceErr) {
      result(preferenceErr, null);
      return;
    }
    Userinfo.findById(userId, (myInfoErr, myInfoData) => {
      if (myInfoErr) {
        result(myInfoErr, null);
        return;
      }
      User.getAll((allUsersErr, allUsersData) => {
        if (allUsersErr) {
          result(allUsersErr, null);
          return;
        }

        let recUsers = [];
        // among all users, add the users to be recommended to recUsers
        const promises = allUsersData.map(target => new Promise((resolve, reject) => {
          const targetId = target.UserID;
          if (targetId == userId) {
            resolve();
            return;
          } 

          Userinfo.findById(targetId, (targetInfoErr, targetInfoData) => {
            if (targetInfoErr) {
              reject(targetInfoErr);
              return;
            }
            Ownership.findByUserId(targetId, (ownershipErr, ownershipData) => {
              if (ownershipErr) {
                if (ownershipErr.kind !== "not_found") {
                  reject(ownershipErr);
                  return;
                }  
                // ownership not found, target does not own an apartment
                // both user and target dont own apartment -- only check if they match with each other 
                const checkUserPromise = new Promise(resolve1 => {
                  checkUserMatch(preferenceData, myInfoData, targetInfoData, resolve1)
                })
                
                checkUserPromise.then(matchScore => {
                  if (matchScore !== -1) {
                    recUsers.push({
                      user: target,
                      userInfo: targetInfoData,
                      apartment: null,
                      score: matchScore
                    })
                  }
                  resolve();
                })   
              } else {
                // target owns an apartment
                Apt.findOne(ownershipData[0].AptID, (aptErr, aptData) => {
                  if (aptErr) {
                    reject(aptErr);
                    return;
                  }
                  // check if user and target match, and if user and apartment match
                  const checkUserPromise = new Promise(resolve1 => {
                    checkUserMatch(preferenceData, myInfoData, targetInfoData, resolve1)
                  })
                  
                  checkUserPromise.then(matchScore => {
                    if (matchScore !== -1 && checkAptMatch(aptData, myInfoData)) {
                      recUsers.push({
                        user: target,
                        userInfo: targetInfoData,
                        apartment: aptData,
                        score: matchScore
                      })
                    }
                    resolve();
                  })   
                });
              } 
            });
          });
        }));
        Promise.all(promises).then(() => {
          recUsers.sort((u1, u2) => u2.score - u1.score)
          result(null, recUsers)},
          err => {result(err, null)});
      }); 
    });
  });
}

// recommend roommates to users with an apartment
const recommendWithApt = (userId, apt, result) => {
  Preference.findById(userId, (preferenceErr, preferenceData) => {
    if (preferenceErr) {
      result(preferenceErr, null);
      return;
    }
    Userinfo.findById(userId, (myInfoErr, myInfoData) => {
      if (myInfoErr) {
        result(myInfoErr, null);
        return;
      }
      User.getAll((allUsersErr, allUsersData) => {
        if (allUsersErr) {
          result(allUsersErr, null);
          return;
        }

        let recUsers = [];
        // among all users, add the users to be recommened to recUsers
        const promises = allUsersData.map(target => new Promise((resolve, reject) => {
          const targetId = target.UserID;
          if (targetId == userId) {
            resolve();
            return;
          } 

          Userinfo.findById(targetId, (targetInfoErr, targetInfoData) => {
            if (targetInfoErr) {
              reject(targetInfoErr);
              return;
            }
            Ownership.findByUserId(targetId, (ownershipErr, ownershipData) => {
              if (ownershipErr) {
                if (ownershipErr.kind !== "not_found") {
                  reject(ownershipErr);
                  return;
                }  
                // ownership not found, target does not own an apartment
                // check if user and target match, and if user and apartment match
                const checkUserPromise = new Promise(resolve1 => {
                  checkUserMatch(preferenceData, myInfoData, targetInfoData, resolve1)
                })
                
                checkUserPromise.then(matchScore => {
                  if (matchScore !== -1 && checkAptMatch(apt, targetInfoData)) {
                    recUsers.push({
                      user: target,
                      userInfo: targetInfoData,
                      apartment: null,
                      score: matchScore
                    })
                  }
                  resolve();
                })
              } else {
                resolve();
              }
            });
          });
        }));

        Promise.all(promises).then(() => {
          recUsers.sort((u1, u2) => u2.score - u1.score)
          result(null, recUsers)}, 
          err => {result(err, null)});
      }); 
    });

  });
}


const checkUserMatch = (preference, myInfo, targetInfo, resolve) => {
  if (preference.Gender !== targetInfo.Gender ||
      (!preference.hasPet && targetInfo.Pet) ||
      timeDiff(preference.SleepStart, targetInfo.SleepStart) > 2 ||
      timeDiff(preference.SleepEnd, targetInfo.SleepEnd) > 2) {
    resolve(-1);
    return;
  }

  // const data = [myInfo.Comment, targetInfo.Comment]
  // ml.extractors.extract(model_id, data).then(res => {
  //   keywords1 = res.body[0].extractions.map(keyword => keyword.parsed_value)
  //   keywords2 = res.body[1].extractions.map(keyword => keyword.parsed_value)
  //   keywords1.forEach(word => {
  //     if (keywords2.includes(word)) {
  //       resolve(2);
  //       return;
  //     }
  //   })
  //   resolve(1);
  // })
  resolve(1)
}

const timeDiff = (time1, time2) => {
  const diff = Math.abs(time1 - time2);
  return Math.min(diff, 24 - diff);
}

const checkAptMatch = (apt, userInfo) => {
  return apt.Price >= userInfo.BudgetLow && 
          apt.Price <= userInfo.BudgetHigh && 
          (apt.Parking > 0 || !userInfo.Parking)
}




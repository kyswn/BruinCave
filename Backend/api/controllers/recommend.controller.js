const Apt = require('../models/apt.model.js');
const User = require("../models/user.model.js");
const Userinfo = require("../models/userinfo.model.js");
const Ownership = require("../models/ownership.model.js");
const Preference = require("../models/preference.model.js");


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
                if (checkUserMatch(preferenceData, targetInfoData)) {
                  recUsers.push({
                    user: target,
                    userInfo: targetInfoData,
                    apartment: null,
                  })
                }
                resolve();
              } else {
                // target owns an apartment
                Apt.findOne(ownershipData[0].AptID, (aptErr, aptData) => {
                  if (aptErr) {
                    reject(aptErr);
                    return;
                  }
                  // check if user and target match, and if user and apartment match
                  if (checkUserMatch(preferenceData, targetInfoData) && checkAptMatch(aptData, myInfoData)) {
                    recUsers.push({
                      user: target,
                      userInfo: targetInfoData,
                      apartment: aptData,
                    })
                  }
                  resolve();
                });
              } 
            });
          });
        }));
        Promise.all(promises).then(() => {result(null, recUsers)}, err => {result(err, null)});
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
              if (checkUserMatch(preferenceData, targetInfoData) && checkAptMatch(apt, targetInfoData)) {
                recUsers.push({
                  user: target,
                  userInfo: targetInfoData,
                  apartment: null,
                })
              }
            } 
            resolve();
          });
        });
      }));
      Promise.all(promises).then(() => {result(null, recUsers)}, err => {result(err, null)});
    }); 

  });
}


const checkUserMatch = (preference, targetInfo) => {
  return preference.Gender === targetInfo.Gender &&
        (preference.hasPet || !targetInfo.Pet) && 
        timeDiff(preference.SleepStart, targetInfo.SleepStart) <= 2 &&
        timeDiff(preference.SleepEnd, targetInfo.SleepEnd) <= 2;
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




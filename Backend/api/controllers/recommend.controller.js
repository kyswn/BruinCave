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
      recommendNoApt(userId, (recErr, recData) => {
        if (recErr) {//TODO
          res.status(500).send({
            message: recErr.message || "Error in recommending roommates"
          });
        } else res.send(recData);
      });
      return;
    } 
  });
}

const recommendNoApt = (userId, result) => {
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

      const promises = allUsersData.map(target => new Promise((resolve, reject) => {
        const targetId = target.UserID;
        if (targetId == userId) {
          resolve();
        } else {
          Ownership.findByUserId(targetId, (ownershipErr, ownershipData) => {
            if (ownershipErr) {
              if (ownershipErr.kind !== "not_found") {
                result(ownershipErr, null);
                return;
              }  
              // target does not own an apartment
              Userinfo.findById(targetId, (targetInfoErr, targetInfoData) => {
                if (targetInfoErr) {
                  result(targetInfoErr, null);
                  return;
                }
                if (checkUserMatch(preferenceData, targetInfoData)) {
                  recUsers.push({
                    user: target,
                    userInfo: targetInfoData,
                    apartment: null,
                  })
                }
                resolve();
              });
            }
            
          });
         
        }
      }));

      
      Promise.all(promises).then(() => {result(null, recUsers)});

    }); 
  });
}

const checkUserMatch = (preference, targetInfo) => {
  console.log(preference.Gender === targetInfo.Gender);
  console.log(preference.hasPet || !targetInfo.Pet);
  console.log(timeDiff(preference.SleepStart, targetInfo.SleepStart) <= 2);
  console.log(preference.Gender === targetInfo.Gender);
  return preference.Gender === targetInfo.Gender &&
        (preference.hasPet || !targetInfo.Pet) && 
        timeDiff(preference.SleepStart, targetInfo.SleepStart) <= 2 &&
        timeDiff(preference.SleepEnd, targetInfo.SleepEnd) <= 2;
}

const timeDiff = (time1, time2) => {
  const diff = Math.abs(time1 - time2);
  return Math.min(diff, 24 - diff);
}


const sql = require('./db.js');
// constructor
/**
 * Construct a userinfo.
 * @constructor
 * @param {JSON} userinfo - The userinfo json file
 * 
 */
const Userinfo = function(userinfo) {
    this.SleepStart = userinfo.SleepStart,
    this.SleepEnd = userinfo.SleepEnd,
    this.BudgetLow = userinfo.BudgetLow,
    this.BudgetHigh = userinfo.BudgetHigh,
    this.Gender = userinfo.Gender,
    this.Pet = userinfo.Pet,
    this.Parking = userinfo.Parking,
    this.Comment = userinfo.Comment,
    this.ImageURL = userinfo.ImageURL
};

/**
 * Create a userinfo.
 * 
 * @param {Userinfo} newUserinfo - a Userinfo object you want to create
 * @param {function} result - The handler function of the result
 */

Userinfo.create = (newUserinfo, result) => {
    sql.query("INSERT INTO UserInfo SET ?", newUserinfo, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created Userinfo: ", { id: res.insertId, ...newUserinfo});
        result(null, { id: res.insertId, ...newUserinfo});
    });
}
/**
 *  Find the userinfo of a user
 * 
 * @param {int} UserId - The userid of the user you want to find userinfo about
 * @param {function} result - The handler function of the result
 */
Userinfo.findById = (UserId, result) => {
    sql.query(`SELECT * FROM UserInfo WHERE ID = ${UserId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
    
        if (res.length) {
            console.log("found Userinfo: ", res[0]);
            result(null, res[0]);
            return;
        }
    
        result({ kind: "not_found" }, null);
    });
};

/**
 * Update a userinfo.
 * @param {int} id -The userinfoid of the userinfo you want to update
 * @param {Userinfo} userinfo - The Userinfo object you want to update the user with 
 * @param {function} result - The handler function of the result
 */
Userinfo.updateById = (id, userinfo, result) => {
    sql.query(
        "UPDATE UserInfo SET SleepStart = ?, SleepEnd = ?, BudgetLow = ?, BudgetHigh = ?, \
        Gender = ?, Pet = ?, Parking = ?, Comment = ?, ImageURL = ? WHERE ID = ?", 
        [userinfo.SleepStart, userinfo.SleepEnd, userinfo.BudgetLow, userinfo.BudgetHigh,
        userinfo.Gender, userinfo.Pet, userinfo.Parking, userinfo.Comment, userinfo.ImageURL, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
        
            if (res.affectedRows == 0) {
                // not found User with the id
                result({ kind: "not_found" }, null);
                return;
            }
        
            console.log("updated Userinfo: ", { id: id, ...userinfo });
            result(null, { id: id, ...userinfo });            
        }
    );
};
/**
 * Remove a userinfo.
 * 
 * @param {int} id - The userinfoid of the userinfo you want to remove
 * @param {function} result - The handler function of the result
 */
Userinfo.remove = (id, result) => {
    sql.query("DELETE FROM UserInfo WHERE ID = ?", id, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
    
        if (res.affectedRows == 0) {
          // not found User with the id
          result({ kind: "not_found" }, null);
          return;
        }
    
        console.log("deleted Userinfo with id: ", id);
        result(null, res);
    });    
}

module.exports = Userinfo;
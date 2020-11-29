const sql = require('./db.js');

const Userinfo = function(userinfo) {
    this.SleepStart = userinfo.SleepStart,
    this.SleepEnd = userinfo.SleepEnd,
    this.BudgetLow = userinfo.BudgetLow,
    this.BudgetHigh = userinfo.BudgetHigh,
    this.Gender = userinfo.Gender,
    this.Pet = userinfo.Pet,
    this.Parking = userinfo.Parking,
    this.Comment = userinfo.Comment
};

Userinfo.create = (newUserinfo, result) => {
    sql.query("INSERT INTO userinfo SET ?", newUserinfo, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created Userinfo: ", { id: res.insertId, ...newUserinfo});
        result(null, { id: res.insertId, ...newUserinfo});
    });
}

Userinfo.findById = (UserId, result) => {
    sql.query(`SELECT * FROM userinfo WHERE ID = ${UserId}`, (err, res) => {
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

Userinfo.updateById = (id, userinfo, result) => {
    sql.query(
        "UPDATE userinfo SET SleepStart = ?, SleepEnd = ?, BudgetLow = ?, BudgetHigh = ?, \
        Gender = ?, Pet = ?, Parking = ?, Comment = ? WHERE ID = ?", 
        [userinfo.SleepStart, userinfo.SleepEnd, userinfo.BudgetLow, userinfo.BudgetHigh,
        userinfo.Gender, userinfo.Pet, userinfo.Parking, userinfo.Comment, id],
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

Userinfo.remove = (id, result) => {
    sql.query("DELETE FROM userinfo WHERE ID = ?", id, (err, res) => {
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
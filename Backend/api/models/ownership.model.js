const sql = require("./db.js");

// constructor
const Ownership = function(ownership) {
  //this.ID = preference.ID;
  this.UsrID = ownership.UsrID;
  this.AptID = ownership.AptID;
};

Ownership.create = (newOwnership, result) => {
  sql.query("INSERT INTO ownership SET ?", newOwnership, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created Ownership: ", newOwnership );
    result(null, newOwnership);
  });
};

Ownership.findByUserId = (UserId, result) => {
  sql.query(`SELECT AptID FROM ownership WHERE UsrID = ${UserId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found Ownership with UserId: ", res);
      result(null, res);
      return;
    }

    // not found Ownership with the Userid
    result({ kind: "not_found" }, null);
  });
};

Ownership.findByAptId = (AptId, result) => {
  sql.query(`SELECT UsrID FROM ownership WHERE AptID = ${AptId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found Ownership with AptId: ", res);
      result(null, res);
      return;
    }

    // not found Ownership with the AptId
    result({ kind: "not_found" }, null);
  });
};

Ownership.removeByBothId = (UserId, AptId, result) => {
  sql.query(`DELETE FROM ownership WHERE UsrID = ${UserId} AND AptID = ${AptId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Ownership with the Both Id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted Ownership with UserId: ", UserId, "AptId:", AptId);
    result(null, res);
  });
};


Ownership.removeByUserId = (UserId, result) => {
  sql.query("DELETE FROM ownership WHERE UsrID = ?",
   UserId, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Ownership with the UserId
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted Ownership with UserId: ", UserId);
    result(null, res);
  });
};

Ownership.removeByAptId = (AptId, result) => {
  sql.query("DELETE FROM ownership WHERE AptID = ?",
   AptId, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Ownership with the AptId
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted Ownership with AptId: ", AptId);
    result(null, res);
  });
};


Ownership.removeAll = result => {
  sql.query("DELETE FROM ownership", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} Ownership`);
    result(null, res);
  });
};

module.exports = Ownership;
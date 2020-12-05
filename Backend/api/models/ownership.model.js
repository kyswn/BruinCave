const sql = require("./db.js");

// constructor
/**
 * Construct an Ownership.
 * @constructor
 * @param {JSON} ownerhship - The ownership json file
 *
 */
// constructor
const Ownership = function (ownership) {
  //this.ID = preference.ID;
  this.UsrID = ownership.UsrID;
  this.AptID = ownership.AptID;
};
/**
 * Create a new ownership
 *
 * @param {Ownership} newOwnership - The Ownership object you want to create
 * @param {function} result - The handler function of the result
 */

Ownership.create = (newOwnership, result) => {
  sql.query("INSERT INTO Ownership SET ?", newOwnership, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created Ownership: ", newOwnership);
    result(null, newOwnership);
  });
};
/**
 *  Find a user's ownership
 *
 * @param {int} UserId - The userid of the user you want to find ownership
 * @param {function} result - The handler function of the result
 */
Ownership.findByUserId = (UserId, result) => {
  sql.query(
    `SELECT AptID FROM Ownership WHERE UsrID = ${UserId}`,
    (err, res) => {
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
    }
  );
};
/**
 *  Find the ownership of an apartment
 *
 * @param {int} AptId - The apartmentid of the apartment you want to find ownership
 * @param {function} result - The handler function of the result
 */
Ownership.findByAptId = (AptId, result) => {
  sql.query(
    `SELECT UsrID FROM Ownership WHERE AptID = ${AptId}`,
    (err, res) => {
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
    }
  );
};
/**
 * Remove an ownership.
 *
 * @param {int} UserId - The userid of the owernship you want to remove
 * @param {int} AptId - The apartmentid of the owernship you want to remove
 * @param {function} result - The handler function of the result
 */

Ownership.removeByBothId = (UserId, AptId, result) => {
  sql.query(
    `DELETE FROM Ownership WHERE UsrID = ${UserId} AND AptID = ${AptId}`,
    (err, res) => {
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
    }
  );
};

/**
 * Remove a user's owernship.
 *
 * @param {int} UserId - The userid of the user you want to remove ownership
 *
 * @param {function} result - The handler function of the result
 */

Ownership.removeByUserId = (UserId, result) => {
  sql.query("DELETE FROM Ownership WHERE UsrID = ?", UserId, (err, res) => {
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
/**
 * Remove the ownership of an apartment.
 *
 *
 * @param {int} AptId - The apartmentid of the owernship you want to remove
 * @param {function} result - The handler function of the result
 */

Ownership.removeByAptId = (AptId, result) => {
  sql.query("DELETE FROM Ownership WHERE AptID = ?", AptId, (err, res) => {
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

/**
 * Remove all ownerships.
 *
 *
 * @param {function} result - The handler function of the result
 */
Ownership.removeAll = (result) => {
  sql.query("DELETE FROM Ownership", (err, res) => {
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

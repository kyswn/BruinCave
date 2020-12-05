const sql = require("./db.js");

// constructor
/**
 * Construct a preference.
 * @constructor
 * @param {JSON} preference - The preference json file
 *
 */

// constructor
const Preference = function (preference) {
  this.ID = preference.ID;
  this.SleepStart = preference.SleepStart;
  this.SleepEnd = preference.SleepEnd;
  this.Gender = preference.Gender;
  this.HasPet = preference.HasPet;
  this.Description = preference.Description;
};

/**
 * Create a preference.
 *
 * @param {Preference} newPreference - a Preference object you want to create
 * @param {function} result - The handler function of the result
 */

Preference.create = (newPreference, result) => {
  sql.query("INSERT INTO Preference SET ?", newPreference, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created PREFERENCE: ", { id: res.insertId, ...newPreference });
    result(null, { id: res.insertId, ...newPreference });
  });
};

/**
 *  Find the preference of a user by his/her userid
 *
 * @param {int} UserId - The userid of the user you want to find preference of
 * @param {function} result - The handler function of the result
 */

Preference.findById = (UserId, result) => {
  sql.query(`SELECT * FROM Preference WHERE ID = ${UserId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found Preference: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Preference with the id
    result({ kind: "not_found" }, null);
  });
};

/**
 * Get all the preferences
 *
 *
 * @param {function} result - The handler function of the result
 */

Preference.getAll = (result) => {
  sql.query("SELECT * FROM Preference", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Preferences: ", res);
    result(null, res);
  });
};

/**
 * Update a preference.
 * @param {int} id -The preferenceid of the preference you want to update
 * @param {Preference} preference - The preference object you want to update the preference with
 * @param {function} result - The handler function of the result
 */

Preference.updateById = (id, preference, result) => {
  sql.query(
    "UPDATE Preference SET SleepStart = ?, SleepEnd = ?, Gender = ?, HasPet = ?, Description = ? WHERE ID = ?",
    [
      preference.SleepStart,
      preference.SleepEnd,
      preference.Gender,
      preference.HasPet,
      preference.Description,
      id,
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Preference with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated Preference: ", { id: id, ...preference });
      result(null, { id: id, ...preference });
    }
  );
};
/**
 * Remove a preference.
 *
 * @param {int} id - The preferenceid of the preference you want to remove
 * @param {function} result - The handler function of the result
 */
Preference.remove = (id, result) => {
  sql.query("DELETE FROM Preference WHERE ID = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Preference with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted Preference with id: ", id);
    result(null, res);
  });
};
/**
 * Remove all preferences.
 *
 *
 * @param {function} result - The handler function of the result
 */
Preference.removeAll = (result) => {
  sql.query("DELETE FROM Preference", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} Preferences`);
    result(null, res);
  });
};

module.exports = Preference;

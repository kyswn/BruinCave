const Preference = require("../models/preference.model.js");

// Create and Save a new Preference
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Preference
  const preference = new Preference({
    SleepStart: req.body.SleepStart,
    SleepEnd: req.body.SleepEnd,
    Gender: req.body.Gender,
    HasPet: req.body.HasPet,
    Description: req.body.Description
  });

  // Save Preference in the database
  Preference.create(preference, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the preference."
      });
    else res.send(data);
  });
};

// Retrieve all Preferences from the database.
exports.findAll = (req, res) => {
    Preference.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving Preferences."
          });
        else res.send(data);
      }); 
};

// Find a single preference with a ID
exports.findOne = (req, res) => {
    Preference.findById(req.params.UserID, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found preference with id ${req.params.UserID}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving preference with id " + req.params.UserID
            });
          }
        } else res.send(data);
      });
};

// Update a preference identified by the userid in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Preference.updateById(req.params.UserID,new Preference(req.body), (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Preference with id ${req.params.UserID}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating preference with id " + req.params.UserID
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a preference with the specified userid in the request
exports.delete = (req, res) => {
    Preference.remove(req.params.UserID, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found preference with id ${req.params.UserID}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete preference with id " + req.params.UserID
            });
          }
        } else res.send({ message: `PREFERENCE was deleted successfully!` });
      }); 
};

// Delete all preferences from the database.
exports.deleteAll = (req, res) => {
    Preference.removeAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all PREFERENCES."
          });
        else res.send({ message: `All PREFERENCES were deleted successfully!` });
      });
};
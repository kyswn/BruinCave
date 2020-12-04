const Ownership = require("../models/ownership.model.js");

// Create and Save a new Ownership
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Ownership
  const ownership = new Ownership({
    UsrID: req.body.UsrID,
    AptID: req.body.AptID
  });

  // Save Ownership in the database
  Ownership.create(ownership, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the ownership."
      });
    else res.send(data);
  });
};

// Find ownerships with UsrID
exports.findByUsrId = (req, res) => {
    Ownership.findByUserId(req.params.UserID, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found ownership with Userid ${req.params.UserID}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving ownership with Userid " + req.params.UserID
            });
          }
        } else res.send(data);
      });
};

// Find ownerships with AptID
exports.findByAptId = (req, res) => {
    Ownership.findByAptId(req.params.AptID, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found ownership with Aptid ${req.params.AptID}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving ownership with Aptid " + req.params.AptID
            });
          }
        } else res.send(data);
      });
};

// Delete an ownership with the specified Usrid and Aptid in the request
exports.deleteByBothId = (req, res) => {
    Ownership.removeByBothId(req.params.UserID, req.params.AptID, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found ownership with Userid ${req.params.UserID}, Aptid ${req.params.AptID}.`
            });
          } else {
            res.status(500).send({
              message: `Could not delete ownership with Userid ${req.params.UserID}, Aptid ${req.params.AptID}.`
            });
          }
        } else res.send({ message: `Ownership of Userid ${req.params.UserID}, AptId ${req.params.AptID} was deleted successfully!` });
      }); 
};


// Delete an ownership with the specified userid in the request
exports.deleteByUsrId = (req, res) => {
    Ownership.removeByUserId(req.params.UserID, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found ownership with Userid ${req.params.UserID}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete ownership with Userid " + req.params.UserID
            });
          }
        } else res.send({ message: `Ownership of UserId ${req.params.UserID} were deleted successfully!` });
      }); 
};

// Delete an ownership with the specified Aptid in the request
exports.deleteByAptId = (req, res) => {
    Ownership.removeByAptId(req.params.AptID, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found ownership with Aptid ${req.params.AptID}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete ownership with Aptid " + req.params.AptID
            });
          }
        } else res.send({ message: `Ownership of AptId ${req.params.AptID} were deleted successfully!` });
      }); 
};

// Delete all ownership from the database.
exports.deleteAll = (req, res) => {
    Ownership.removeAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Ownership."
          });
        else res.send({ message: `All Ownership were deleted successfully!` });
      });
};
const User = require("../models/user.model.js");

// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a User
  const user = new User({
    Name: req.body.Name,
    Password: req.body.Password,
    Email: req.body.Email,
    Contact: req.body.Contact,
    Type: req.body.Type
  });

  // Save User in the database
  User.create(user, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the user."
      });
    else res.send(data);
  });
};

// Retrieve all user from the database.
exports.findAll = (req, res) => {
    User.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving users."
          });
        else res.send(data);
      }); 
};

// Find a single user with a UserrId
exports.findOne = (req, res) => {
    User.findById(req.params.UserID, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found user with id ${req.params.UserID}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving user with id " + req.params.UserID
            });
          }
        } else res.send(data);
      });
};

// Update a user identified by the userid in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  User.updateById(req.params.UserID,new User(req.body), (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found user with id ${req.params.UserID}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating user with id " + req.params.UserID
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a user with the specified userid in the request
exports.delete = (req, res) => {
    User.remove(req.params.UserID, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found user with id ${req.params.UserID}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete User with id " + req.params.UserID
            });
          }
        } else res.send({ message: `USER was deleted successfully!` });
      }); 
};

// Delete all users from the database.
exports.deleteAll = (req, res) => {
    User.removeAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all USERS."
          });
        else res.send({ message: `All USERES were deleted successfully!` });
      });
};
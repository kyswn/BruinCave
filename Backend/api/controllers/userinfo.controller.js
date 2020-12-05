const Userinfo = require("../models/userinfo.model.js");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content cannot be empty",
    });
  }

  const userinfo = new Userinfo({
    ID: req.body.ID,
    SleepStart: req.body.SleepStart,
    SleepEnd: req.body.SleepEnd,
    BudgetLow: Number(req.body.BudgetLow),
    BudgetHigh: Number(req.body.BudgetHigh),
    Gender: req.body.Gender,
    Pet: req.body.Pet,
    Parking: req.body.Parking,
    Comment: req.body.Comment,
    ImageURL: req.body.ImageURL,
  });

  Userinfo.create(userinfo, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the user.",
      });
    } else res.send(data);
  });
};

exports.findOne = (req, res) => {
  Userinfo.findById(req.params.UserID, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found user with id ${req.params.UserID}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving user with id " + req.params.UserID,
        });
      }
    } else res.send(data);
  });
};

exports.updateOne = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  Userinfo.updateById(
    req.params.UserID,
    new Userinfo(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found userinfo with id ${req.params.UserID}.`,
          });
        } else {
          res.status(500).send({
            message: "Error updating userinfo with id " + req.params.UserID,
          });
        }
      } else res.send(data);
    }
  );
};

exports.deleteOne = (req, res) => {
  Userinfo.remove(req.params.UserID, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found userinfo with id ${req.params.UserID}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Userinfo with id " + req.params.UserID,
        });
      }
    } else {
      res.send({ message: `USER was deleted successfully!` });
    }
  });
};

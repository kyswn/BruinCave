const Apt = require('../models/apt.model.js');

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content cannot be empty!"
        });
    }

    const newApt = new Apt({
        Name: req.body.Name,
        Bedroom: req.body.Bedroom,
        Bathroom: req.body.Bathroom,
        Parking: req.body.Parking,
        Description: req.body.Description,
        Location: req.body.Location,
        Amenity: req.body.Amenity,
        Price: req.body.Price,
        Comment: req.body.Comment
    });

    Apt.create(newApt, (err, data) => {
        if (err){
            res.status(500).send({
                message:
                err.message || "Some error when creating the apartment."
            });
        }
        else{
            res.status(200).send(data);
        }
    });
};

exports.findOne = (req,res) => {
    Apt.findOne(req.params.AptID, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not Found Apt with id = ${req.params.AptID}`
                });
            } else {
                res.status(500).send({
                    message: "Error getting Apt."
                });
            }
        }
        else {
            res.send(data);
        }
    });
};
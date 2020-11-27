const sql = require('./db.js');

const Apt = function(apt) {
    this.Name = apt.Name;
    this.Bedroom = apt.Bedroom;
    this.Bathroom = apt.Bathroom;
    this.Parking = apt.Parking;
    this.Description = apt.Description;
    this.Location = apt.Location;
    this.Amenity = apt.Amenity;
    this.Price = apt.Price;
    this.Comment = apt.Comment;    
};

Apt.create = (newApt, result) => {
    sql.query("INSERT INTO apartment SET ?", newApt, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created APT: ", { id: res.insertId, ...newApt});
        result(null, { id: res.insertId, ...newApt });
    });
};

Apt.findOne = (AptId, result) => {
    sql.query(`SELECT * FROM apartment WHERE ApartmentID = ${AptId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found Apt: ", res[0]);
            result(null, res[0]);
        }
        else {
            result({ kind: "not_found"}, null);
        }
        
    })
}

module.exports = Apt;
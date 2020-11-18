var express = require('express');
var router = express.Router();
const users = require("../controllers/user.controller.js")
/* GET users listing. */
//create user 
router.post("/", users.create);

// Retrieve all users
router.get("/", users.findAll);

// Retrieve a single user with userId
router.get("/:UserID", users.findOne);

// Update a user with userId
router.put("/:UserID", users.update);

// Delete a user with userId
router.delete("/:UserID", users.delete);

//delete all users
router.delete("/", users.deleteAll);


module.exports = router;

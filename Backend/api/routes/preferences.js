var express = require('express');
var router = express.Router();
const preferences = require("../controllers/preference.controller.js")

//create preference 
router.post("/", preferences.create);

// Retrieve all preferences
router.get("/", preferences.findAll);

// Retrieve a single preference with userId
router.get("/:UserID", preferences.findOne);

// Update a preference with userId
router.put("/:UserID", preferences.update);

// Delete a preference with userId
router.delete("/:UserID", preferences.delete);

//delete all preferences
router.delete("/", preferences.deleteAll);


module.exports = router;

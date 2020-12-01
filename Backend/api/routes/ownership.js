var express = require('express');
var router = express.Router();
const ownership = require("../controllers/ownership.controller.js")

//create ownership 
router.post("/", ownership.create);

// Retrieve ownership by UserId
router.get("/u/:UserID", ownership.findByUsrId);

// Retrieve ownership by AptId
router.get("/a/:AptID", ownership.findByAptId);

// Delete an ownership with userId and AptId
router.delete("/b/:UserID/:AptID", ownership.deleteByBothId);

// Delete an ownership with userId
router.delete("/u/:UserID", ownership.deleteByUsrId);

// Delete an ownership with AptId
router.delete("/a/:AptID", ownership.deleteByAptId);

//delete all ownership
router.delete("/", ownership.deleteAll);


module.exports = router;

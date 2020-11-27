var express = require('express');
var router = express.Router();
const apt = require('../controllers/apt.controller.js');

router.post("/", apt.create);

router.get("/:AptID", apt.findOne);

// router.put("/:AptID", apt.update);

module.exports = router;
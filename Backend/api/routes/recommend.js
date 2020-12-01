var express = require('express');
var router = express.Router();
const recommend = require('../controllers/recommend.controller.js');

router.get("/:UserID", recommend.recommend);

module.exports = router;
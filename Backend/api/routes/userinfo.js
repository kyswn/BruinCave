var express = require('express');
var router = express.Router();
const userinfo = require('../controllers/userinfo.controller.js');

router.post("/", userinfo.create);

router.get("/:UserID", userinfo.findOne);

router.put('/:UserID', userinfo.updateOne);

router.delete('/:UserID', userinfo.deleteOne);

module.exports = router;
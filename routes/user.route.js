var express = require('express');
var router = express.Router();
var db = require("../db");
var controller = require('../controller/user.controller');


router.get("/create", controller.create);

router.get("/", controller.index);

router.get("/:id", controller.view);

router.post("/create", controller.postCreate);

module.exports = router;
var express = require('express');
var router = express.Router();
var db = require("../db");
var controller = require('../controller/user.controller');
var validate = require("../validate/user.validate");


router.get("/create", controller.create);

router.get("/", controller.index);

router.get("/:id", controller.view);

router.post("/create", validate.postCreate, controller.postCreate);

module.exports = router;
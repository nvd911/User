var express = require('express');
var router = express.Router();
var db = require("../db.js");


router.get("/create", function (req, res) {
    res.render("user/create")
});

router.get("/", function (req, res) {
    res.render("user/index", {
        user: db.get("user").value()
    });
});

router.get("/:id", function (req, res) {
    var id = req.params.id;
    var user = db
        .get("user")
        .find({
            id: id,
        })
        .value();
    res.render("user/view", {
        user: user,
    });
});

router.post("/create", function (req, res) {
    // req.body.id = shortid.generate();
    error = [];
    if (!req.body.name) {
        error.push("Thiếu tên truy cập")
    }

    if (!req.body.phone) {
        error.push("Thiếu số điện thoại")
    }

    if (!req.body.email) {
        error.push("Thiếu địa chỉ email")
    }

    if (error.length) {
        res.render("user/create", {
            error: error,
            value: req.body
        })
    }
    db.get("user").push(req.body).write();
    res.redirect("/user");
    return;
});

module.exports = router;
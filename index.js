var express = require("express");
var port = 3000;

var db = require("./db");
var user = require("./routes/user.route");

var app = express(); //body
app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.json()); // req.body
app.use(
    express.urlencoded({
        extended: true,
    })
); // req.body







app.use("/user", user);
app.listen(port, function () {
    console.log("port: " + port);
});
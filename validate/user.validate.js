module.exports.postCreate = function (req, res, next) {
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
    return;
    next();
}
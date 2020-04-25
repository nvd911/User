const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);
const shortid = require("shortid");
db.defaults({
    user: [],
}).write();

module.exports = db;
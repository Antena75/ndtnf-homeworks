"use strict";
var DEFAULT_MONGO_PORT = 27017;
var DEFAULT_HOST = "mongo";
var MONGO_PORT = process.env.MONGO_PORT || DEFAULT_MONGO_PORT;
var MONGO_HOST = process.env.MONGO_HOST || DEFAULT_HOST;
module.exports = process.env.MONGODB_URL || "mongodb://root:example@localhost:27017/books?authSource=admin";

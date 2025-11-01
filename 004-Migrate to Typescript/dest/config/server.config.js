"use strict";
var DEFAULT_PORT = 3000;
var DEFAULT_HOST = "127.0.0.1";
var HOST = process.env.HOST || DEFAULT_HOST;
module.exports = process.env.PORT || DEFAULT_PORT;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var multer_1 = __importDefault(require("multer"));
var storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/books');
    },
    filename: function (req, file, cb) {
        cb(null, "".concat(file.originalname));
    }
});
module.exports = (0, multer_1.default)({ storage: storage });

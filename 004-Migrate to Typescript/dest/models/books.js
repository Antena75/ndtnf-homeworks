"use strict";
var mongoose_1 = require("mongoose");
var bookSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ""
    },
    authors: {
        type: String,
        default: ""
    },
    favorite: {
        type: Boolean,
        default: false
    },
    fileCover: {
        type: String,
        default: ""
    },
    fileName: {
        type: String,
        default: ""
    },
    fileBook: {
        type: String,
        default: ""
    }
});
module.exports = (0, mongoose_1.model)('Books', bookSchema);

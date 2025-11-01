"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
var inversify_1 = require("inversify");
var BooksRepository_1 = require("./classes/BooksRepository");
var container = new inversify_1.Container();
exports.container = container;
container.bind(BooksRepository_1.BooksRepository).toSelf();

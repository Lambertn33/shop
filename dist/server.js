"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./util/db"));
const body_parser_1 = require("body-parser");
const categories_1 = require("./seeds/categories");
const roles_1 = require("./seeds/roles");
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Contrl-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});
app.use((err, req, res, next) => {
    res.status(500).send({ message: 'invalid route' });
});
db_1.default.sync({ force: true }).then(() => {
    (0, categories_1.seedCategories)();
    (0, roles_1.seedRoles)();
    app.listen(3000);
});

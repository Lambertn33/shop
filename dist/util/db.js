"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const Cart_1 = require("../models/Cart");
const CartProduct_1 = require("../models/CartProduct");
const Category_1 = require("../models/Category");
const dotenv = __importStar(require("dotenv"));
const Product_1 = require("../models/Product");
const Role_1 = require("../models/Role");
const User_1 = require("../models/User");
dotenv.config();
const connection = new sequelize_typescript_1.Sequelize({
    dialect: "postgres",
    host: process.env.DB_HOST,
    logging: false,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    models: [Category_1.Category, Cart_1.Cart, CartProduct_1.CartProduct, Product_1.Product, Role_1.Role, User_1.User]
});
exports.default = connection;

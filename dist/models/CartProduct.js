"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartProduct = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Cart_1 = require("./Cart");
const Product_1 = require("./Product");
let CartProduct = class CartProduct extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.UUID,
        primaryKey: true,
        allowNull: false
    }),
    __metadata("design:type", String)
], CartProduct.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Product_1.Product),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], CartProduct.prototype, "productId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Cart_1.Cart),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], CartProduct.prototype, "cartId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], CartProduct.prototype, "quantity", void 0);
CartProduct = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: true,
        tableName: 'cart_products'
    })
], CartProduct);
exports.CartProduct = CartProduct;

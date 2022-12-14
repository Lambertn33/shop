"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedUsers = void 0;
const bcryptjs_1 = require("bcryptjs");
const uuid_1 = require("uuid");
const User_1 = require("../models/User");
const seedUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const hashedPassword = yield (0, bcryptjs_1.hash)('admin12345', 12);
    const newAdmin = {
        id: (0, uuid_1.v4)(),
        names: 'system admin',
        email: 'admin@gmail.com',
        password: hashedPassword,
        isAdmin: true
    };
    yield User_1.User.create(newAdmin);
});
exports.seedUsers = seedUsers;

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
exports.seedRoles = void 0;
const uuid_1 = require("uuid");
const Role_1 = require("../models/Role");
const index_1 = require("../enums/index");
const bcryptjs_1 = require("bcryptjs");
const User_1 = require("../models/User");
const roles = [
    {
        id: (0, uuid_1.v4)(),
        name: index_1.RoleEnum.ADMIN
    },
    {
        id: (0, uuid_1.v4)(),
        name: index_1.RoleEnum.CLIENT
    },
];
const seedRoles = () => __awaiter(void 0, void 0, void 0, function* () {
    for (const r of roles) {
        const role = yield Role_1.Role.findOne({ where: { name: r.name } });
        if (!role)
            yield Role_1.Role.create(r);
    }
    //Seed System Admin
    const newAdmin = {
        id: (0, uuid_1.v4)(),
        names: 'system admin',
        email: 'admin@gmail.com',
        password: yield (0, bcryptjs_1.hash)('admin12345', 12),
        roleId: roles[0].id
    };
    yield User_1.User.create(newAdmin);
});
exports.seedRoles = seedRoles;

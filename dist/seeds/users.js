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
const Role_1 = require("../models/Role");
const enums_1 = require("../enums");
// Query the Admin ID
// let adminRole: any;
// const queryAdminId = async(): Promise<void> => {
//     const adminRoleObject = await Role.findOne({ where: {name: RoleEnum.ADMIN} })!;
//     adminRole = adminRoleObject;
// }
const seedUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const adminRoleObject = yield Role_1.Role.findOne({ where: { name: enums_1.RoleEnum.ADMIN } });
    const adminRoleId = adminRoleObject === null || adminRoleObject === void 0 ? void 0 : adminRoleObject.id;
    const administrator = yield User_1.User.findOne({ where: { roleId: adminRoleId } });
    if (administrator)
        return;
    const newAdministrator = {
        id: (0, uuid_1.v4)(),
        names: 'system admin',
        email: 'admin@gmail.com',
        password: yield (0, bcryptjs_1.hash)('admin12345', 12),
        roleId: adminRoleId
    };
    yield User_1.User.create(newAdministrator);
});
exports.seedUsers = seedUsers;

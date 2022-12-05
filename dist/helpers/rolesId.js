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
exports.getClientRole = exports.getAdminRole = void 0;
const Role_1 = require("../models/Role");
const enums_1 = require("../enums");
const getAdminRole = () => __awaiter(void 0, void 0, void 0, function* () {
    const adminRole = yield Role_1.Role.findOne({ where: { name: enums_1.RoleEnum.ADMIN } });
    return adminRole === null || adminRole === void 0 ? void 0 : adminRole.id;
});
exports.getAdminRole = getAdminRole;
const getClientRole = () => __awaiter(void 0, void 0, void 0, function* () {
    const clientRole = yield Role_1.Role.findOne({ where: { name: enums_1.RoleEnum.CLIENT } });
    return clientRole === null || clientRole === void 0 ? void 0 : clientRole.id;
});
exports.getClientRole = getClientRole;

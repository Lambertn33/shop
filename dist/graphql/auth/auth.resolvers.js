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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.AuthResolver = void 0;
const type_graphql_1 = require("type-graphql");
const uuid_1 = require("uuid");
const bcryptjs_1 = require("bcryptjs");
const auth_schema_1 = require("./auth.schema");
const User_1 = require("../../models/User");
let AuthResolver = class AuthResolver {
    signup(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const { names, email, password } = input;
            const hashedPassword = yield (0, bcryptjs_1.hash)(password, 12);
            const newUser = {
                id: (0, uuid_1.v4)(),
                names: names,
                email: email,
                password: hashedPassword,
                isAdmin: false
            };
            const createdUser = yield User_1.User.create(newUser);
            return createdUser;
        });
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => auth_schema_1.User),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_schema_1.UserInput]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "signup", null);
AuthResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => auth_schema_1.User)
], AuthResolver);
exports.AuthResolver = AuthResolver;

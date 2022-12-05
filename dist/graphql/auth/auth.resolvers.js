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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthResolver = void 0;
const type_graphql_1 = require("type-graphql");
const uuid_1 = require("uuid");
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
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
    signin(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = input;
            const user = yield User_1.User.findOne({ where: { email: email } });
            if (!user)
                throw new Error('invalid email');
            const checkPassword = yield (0, bcryptjs_1.compare)(password, user.password);
            if (!checkPassword)
                throw new Error('invalid password');
            let userToken = jsonwebtoken_1.default.sign({ userId: user.id, userNames: user.names, userEmail: user.email }, 'mySecretKey', { expiresIn: '1h' });
            return {
                token: userToken,
                userId: user.id
            };
        });
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => auth_schema_1.User),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_schema_1.SignupInputs]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "signup", null);
__decorate([
    (0, type_graphql_1.Query)(() => auth_schema_1.LoginResponse),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_schema_1.SigninInputs]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "signin", null);
AuthResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => auth_schema_1.User)
], AuthResolver);
exports.AuthResolver = AuthResolver;

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
exports.seedCategories = void 0;
const uuid_1 = require("uuid");
const Category_1 = require("../models/Category");
const categories = [
    {
        id: (0, uuid_1.v4)(),
        name: 'Technology'
    },
    {
        id: (0, uuid_1.v4)(),
        name: 'Sport'
    },
    {
        id: (0, uuid_1.v4)(),
        name: 'Furniture'
    },
    {
        id: (0, uuid_1.v4)(),
        name: 'Accounting'
    },
];
const seedCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    for (const cat of categories) {
        const category = yield Category_1.Category.findOne({ where: { name: cat.name } });
        if (!category)
            yield Category_1.Category.create(cat);
    }
});
exports.seedCategories = seedCategories;

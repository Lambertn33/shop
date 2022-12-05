import { Sequelize } from "sequelize-typescript";
import { Cart } from "../models/Cart";
import { CartProduct } from "../models/CartProduct";
import { Category } from "../models/Category";
import * as dotenv from 'dotenv';
import { Product } from "../models/Product";
import { User } from "../models/User";

dotenv.config();

const connection =  new Sequelize({
    dialect: "postgres",
    host: process.env.DB_HOST,
    logging: false,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    models: [Category, Cart, CartProduct, Product, User]
});

export default connection;
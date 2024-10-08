"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const SecretKey = process.env.SECRETKEY || "asd";
const generateToken = (name, userId) => {
    const token = jsonwebtoken_1.default.sign({
        username: name,
        password: userId
    }, SecretKey, { expiresIn: '30d' });
    return token;
};
exports.default = generateToken;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserData_1 = __importDefault(require("../../controllers/Vendor/UserData"));
const route = express_1.default.Router();
route.get("/", UserData_1.default);
exports.default = route;

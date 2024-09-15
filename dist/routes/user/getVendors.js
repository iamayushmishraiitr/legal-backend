"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AllVendors_1 = __importDefault(require("../../controllers/User/AllVendors"));
const route = express_1.default.Router();
route.get("/", AllVendors_1.default);
exports.default = route;

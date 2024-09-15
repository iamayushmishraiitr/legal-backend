"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const EntryData_1 = __importDefault(require("../../controllers/User/EntryData"));
const Vendors_1 = __importDefault(require("../../controllers/User/Vendors"));
const route = express_1.default.Router();
route.post("/", EntryData_1.default);
route.get('/', Vendors_1.default);
exports.default = route;

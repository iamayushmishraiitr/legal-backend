"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        trim: true,
    },
    number: {
        type: String,
        unique: true,
        trim: true,
    },
    dateOfBirth: {
        type: String,
    }
});
const User = mongoose_1.default.model("User", UserSchema);
exports.default = User;

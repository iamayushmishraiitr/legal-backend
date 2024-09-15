"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const VendorSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        require: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: [/.+@.+\..+/, "Please enter a valid email address"],
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        require: true,
        unique: true,
    },
    countryCode: {
        type: String,
        required: true,
    },
    Users: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
});
const Vendor = mongoose_1.default.model("Vendor", VendorSchema);
exports.default = Vendor;

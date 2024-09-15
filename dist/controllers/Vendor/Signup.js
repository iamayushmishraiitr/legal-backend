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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const VendorSchema_1 = __importDefault(require("../../Schema/VendorSchema"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const VendorSignup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, phone, address, countryCode } = req.body;
    if (!name || !email || !password || !phone || !address || !countryCode)
        return res.status(400).json({ message: "Send Complete Data" });
    const salt = yield bcrypt_1.default.genSalt(10);
    const hashpassword = yield bcrypt_1.default.hash(password, salt);
    try {
        const res1 = yield VendorSchema_1.default.findOne({ email });
        if (res1)
            return res
                .status(400)
                .json({ message: "User already registered with same email" });
        const res2 = yield VendorSchema_1.default.findOne({ phone });
        if (res2)
            return res
                .status(400)
                .json({ message: "User already registered with same phone" });
        const vendor = new VendorSchema_1.default({
            name,
            email,
            password: hashpassword,
            phone,
            address,
            countryCode,
        });
        const newVendor = yield vendor.save();
        if (newVendor)
            return res
                .status(201)
                .json({ message: "User registered successfully", user: newVendor });
    }
    catch (e) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});
exports.default = VendorSignup;

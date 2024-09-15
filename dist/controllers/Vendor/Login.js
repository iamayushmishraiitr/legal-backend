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
const bcrypt_1 = __importDefault(require("bcrypt"));
const VendorSchema_1 = __importDefault(require("../../Schema/VendorSchema"));
const generateToken_1 = __importDefault(require("../../Jwt/generateToken"));
const vendorLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password)
        return res.status(400).json({ message: "Send Complete Data" });
    try {
        const user = yield VendorSchema_1.default.findOne({ email });
        if (!user)
            return res.status(400).json({ message: "User Does Not exist" });
        const compare = yield bcrypt_1.default.compare(password, user.password);
        if (!compare)
            return res.status(400).json({ message: "Incorrect Password" });
        const token = (0, generateToken_1.default)(user.name, user._id);
        res.cookie('token', token, {
            httpOnly: true,
            secure: true,
            maxAge: 24 * 60 * 60 * 1000 * 30,
        });
        return res.status(201).json({ message: "Login Successful" });
    }
    catch (e) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});
exports.default = vendorLogin;

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
const UserSchema_1 = __importDefault(require("../../Schema/UserSchema"));
const generateToken_1 = __importDefault(require("../../Jwt/generateToken"));
const Signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { number, name, dateOfBirth } = req.body;
    if (!number) {
        return res.status(400).json({ message: "Send Complete Data" });
    }
    try {
        const existingUser = yield UserSchema_1.default.findOne({ number });
        console.log("existing USer", existingUser);
        if (existingUser) {
            return res.status(400).json({ message: "Number already registered" });
        }
        console.log("hellow ");
        const newUser = new UserSchema_1.default({ number, name, dateOfBirth });
        console.log("new USer", newUser);
        const savedUser = yield newUser.save();
        console.log("saved User", savedUser);
        if (!savedUser) {
            return res.status(400).json({ message: "Failed to create new User" });
        }
        const token = (0, generateToken_1.default)(number, newUser._id.toString());
        console.log("token ", token);
        return res.status(201).json({
            message: "User registered successfully",
            token: token,
        });
    }
    catch (error) {
        console.error("Error during user signup:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});
exports.default = Signup;

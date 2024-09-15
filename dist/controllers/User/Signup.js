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
    const { number } = req.body;
    if (!number)
        return res.status(400).json({ message: "Send Complete Data" });
    try {
        const data = yield UserSchema_1.default.findOne({ number: number });
        if (data)
            return res.status(400).json({ message: "Number already registered" });
        const newUser = new UserSchema_1.default({
            number,
        });
        console.log(" Adwasdadadsadsadsadasds ");
        // const newuser = await newUser.save();
        // if (!newuser)
        //   return res.status(400).json({ message: "Faild to create new User" });
        const token = (0, generateToken_1.default)(number, JSON.stringify(newUser._id));
        return res
            .status(201)
            .json({ message: "User registered successfully", token: token });
    }
    catch (err) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});
exports.default = Signup;

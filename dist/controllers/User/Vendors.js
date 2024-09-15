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
const RelationSchema_1 = __importDefault(require("../../Schema/RelationSchema"));
const Vendors = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, vendorId } = req.body;
    if (!userId || !vendorId)
        return res.status(400).json({ message: "Send Complete Data" });
    try {
        const res1 = yield RelationSchema_1.default.findOne({
            userId,
            vendorId
        });
        return res.status(200).json({ data: res1 === null || res1 === void 0 ? void 0 : res1.data });
    }
    catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});
exports.default = Vendors;

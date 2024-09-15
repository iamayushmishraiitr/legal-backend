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
const mongoose_1 = __importDefault(require("mongoose"));
const RelationSchema_1 = __importDefault(require("../../Schema/RelationSchema"));
const VendorSchema_1 = __importDefault(require("../../Schema/VendorSchema"));
const entryPoint = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, vendorId, data, } = req.body;
    if (!userId || !vendorId) {
        return res.status(400).json({ message: "Send Complete Data" });
    }
    try {
        let res1 = yield RelationSchema_1.default.findOne({ userId, vendorId });
        if (!res1) {
            res1 = new RelationSchema_1.default({ userId, vendorId, data: [data] });
            let vendor = yield VendorSchema_1.default.findById(vendorId);
            if (!vendor) {
                return res.status(400).json({ message: "Send Valid Vendor Id" });
            }
            vendor.Users.push(new mongoose_1.default.Types.ObjectId(userId));
            yield vendor.save();
        }
        else {
            res1.data.push(data);
        }
        yield res1.save();
        return res.status(200).json({ message: "Entry Successful" });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});
exports.default = entryPoint;

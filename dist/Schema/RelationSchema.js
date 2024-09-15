"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const conversationSchema = new mongoose_1.default.Schema({
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    vendorId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Vendor",
        require: true
    },
    data: [{
            type: String,
        }],
});
const relation = mongoose_1.default.model("relation", conversationSchema);
exports.default = relation;

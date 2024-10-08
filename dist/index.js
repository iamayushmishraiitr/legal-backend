"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connectToDb_1 = __importDefault(require("./Database/connectToDb"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const vendorSignup_1 = __importDefault(require("./routes/vendor/vendorSignup"));
const vendorLogin_1 = __importDefault(require("./routes/vendor/vendorLogin"));
const userLogin_1 = __importDefault(require("./routes/user/userLogin"));
const userSignup_1 = __importDefault(require("./routes/user/userSignup"));
const entryData_1 = __importDefault(require("./routes/user/entryData"));
const getVendors_1 = __importDefault(require("./routes/user/getVendors"));
const userData_1 = __importDefault(require("./routes/vendor/userData"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send("Hellow everyOne ");
});
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use("/userLogin", userLogin_1.default);
app.use("/userSignup", userSignup_1.default);
app.use("/vendorSignup", vendorSignup_1.default);
app.use("/vendorLogin", vendorLogin_1.default);
app.use("/entry", entryData_1.default);
app.use("/vendors", getVendors_1.default);
app.use("/users", userData_1.default);
const PORT = 3000;
app.listen(PORT, () => {
    (0, connectToDb_1.default)();
    console.log(`The Server is running on Port ${PORT}`);
});

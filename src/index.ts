import express from "express";
import connectTodb from "./Database/connectToDb";
import cors from "cors";
import cookieParser from "cookie-parser";
import vendorSignupRoute from "./routes/vendor/vendorSignup";
import vendorLoginRoute from "./routes/vendor/vendorLogin";
import userLoginRoute from "./routes/user/userLogin";
import userSignupRoute from "./routes/user/userSignup";
import entryDataRoute from "./routes/user/entryData";
import getVendorsRoute from "./routes/user/getVendors"
import userDataRoute from "./routes/vendor/userData";
const app = express();
app.get('/', (req:any,res:any)=>{
  res.send("Hellow everyOne ")
})
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/userLogin", userLoginRoute);
app.use("/userSignup", userSignupRoute);
app.use("/vendorSignup", vendorSignupRoute);
app.use("/vendorLogin", vendorLoginRoute);
app.use("/entry", entryDataRoute);
app.use("/vendors",getVendorsRoute)
app.use("/users",userDataRoute)
const PORT = 3000;
app.listen(PORT, () => {
  connectTodb();
  console.log(`The Server is running on Port ${PORT}`);
});

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
import User from "./Schema/UserSchema";
const app = express();
app.get('/', (req:any,res:any)=>{
  res.send("Hellow everyOne ")
})
app.use(cors({
  origin:"http://localhost:5173" ,
  credentials:true
}));
app.use(express.json());
app.use(cookieParser());
app.use("/userLogin", userLoginRoute);
app.use("/userSignup", userSignupRoute);
app.use("/vendorSignup", vendorSignupRoute);
app.use("/vendorLogin", vendorLoginRoute);
app.use("/entry", entryDataRoute);
app.use("/vendors",getVendorsRoute)
app.use("/users",userDataRoute)
app.get("/users-by-age", async (req:any, res:any) => {
  try {
    const results = await User.aggregate([
      {
        $bucket: {
          groupBy: "$age",
          boundaries: [21, 26, Infinity], 
          default: "Other",
          output: {
            totalCount: { $sum: 1 }, 
          },
        },
      },
    ]);

    res.json(results);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
});
const PORT = 3000;
app.listen(PORT, () => {
  connectTodb();
  console.log(`The Server is running on Port ${PORT}`);
});

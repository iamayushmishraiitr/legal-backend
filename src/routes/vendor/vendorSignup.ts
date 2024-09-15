import express from "express"
import VendorSignup from "../../controllers/Vendor/Signup";
const route = express.Router() ;
route.post("/",VendorSignup) ;
export default route
import express from "express"
import vendorLogin from "../../controllers/Vendor/Login";
const route = express.Router() ;
route.post("/",vendorLogin) ;
export default route
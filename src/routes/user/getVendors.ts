import express from "express"
import allVendors from "../../controllers/User/AllVendors";
const route = express.Router() ;
route.get("/",allVendors) ;
export default route
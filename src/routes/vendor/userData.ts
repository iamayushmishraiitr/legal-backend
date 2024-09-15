import express from "express"
import userData from "../../controllers/Vendor/UserData";
const route = express.Router() ;
route.get("/",userData) ;
export default route
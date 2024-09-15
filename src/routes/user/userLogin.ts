import express from "express"
import userLogin from "../../controllers/User/Login";
const route = express.Router() ;
route.post("/",userLogin) ;
export default route
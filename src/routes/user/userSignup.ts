import express from "express"
import userSignup from "../../controllers/User/Signup";
const route = express.Router() ;
route.post("/",userSignup) ;
export default route
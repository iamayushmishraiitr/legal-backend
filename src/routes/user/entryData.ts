import express from "express"
import EntryData from "../../controllers/User/EntryData";
import Vendors from "../../controllers/User/Vendors";
const route = express.Router() ;
route.post("/",EntryData) ;
route.get('/',Vendors) ;
export default route
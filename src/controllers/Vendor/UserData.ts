import { Request,Response } from "express"
import Vendor from "../../Schema/VendorSchema"
const userData= async(req:Request,res:Response)=>{
    const {vendorId}:{vendorId:string} =req.body ;
    const res1= await Vendor.findById(vendorId).populate("Users") ;
    res.status(200).json({data:res1?.Users}) ;
}
export default userData
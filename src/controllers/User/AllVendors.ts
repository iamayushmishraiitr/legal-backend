import { Request,Response } from "express"
import Vendor from "../../Schema/VendorSchema"
const allVendors= async(req:Request,res:Response)=>{
    const res1=  await  Vendor.find() ;
    return res.status(200).json({data:res1}) ;
}
export default allVendors
import { Request,Response } from "express"
import relation from "../../Schema/RelationSchema";
const Vendors= async(req:Request,res:Response)=>{
    const {userId,vendorId}:{userId:string,vendorId:string}= req.body ;
    if(!userId || !vendorId) return res.status(400).json({message:"Send Complete Data"}) ;
    try {
      const res1= await relation.findOne({
          userId ,
          vendorId
      }) 
      return res.status(200).json({data:res1?.data}) ;
    } catch (error) {
         res.status(500).json({message:"Internal Server Error"}) ;
    }
}
export default Vendors
import { Request,Response } from "express"
import bcrypt from "bcryptjs";
import Vendor from "../../Schema/VendorSchema";
import { VendorI } from "../../interface";
import generateToken from "../../Jwt/generateToken";
const vendorLogin= async(req:Request,res:Response)=>{
   const {email,password}:{email:string ,password:string}=req.body ;
   if(!email || !password) return res.status(400).json({message :"Send Complete Data"}) ;
   try {
        const user :VendorI|null =  await Vendor.findOne({email}) ;
        if(!user) return  res.status(400).json({message :"User Does Not exist"}) ;
        const compare=  await bcrypt.compare(password,user.password) ;
        if(!compare) return res.status(400).json({message:"Incorrect Password"}) ;
        const token= generateToken(user.name,user._id)
        res.cookie('token', token, {
         httpOnly: true,  
         secure: true,    
         maxAge: 24 * 60 * 60*1000*30,
       })
         return res.status(201).json({message:"Login Successful"})
   }catch (e) {
      res.status(500).json({ message: "Internal Server Error" });
    }
}
export default vendorLogin
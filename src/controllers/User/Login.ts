import { Request,Response } from "express"
import { UserI } from "../../interface";
import User from "../../Schema/UserSchema";

const Login= async(req:Request,res:Response)=>{
    const {number}:{number:string}=req.body ;
    if(!number) return res.status(400).json({message :"Send Complete Data"}) ;
    try {
         const user :UserI|null =  await  User.findOne({number}) ;
         if(!user) return  res.status(400).json({message :"User Does Not exist"}) ;
         // generate sfsa
          return res.status(201).json({message:"Login Successful"})
    }catch (e) {
       res.status(500).json({ message: "Internal Server Error" });
     }
}
export default Login
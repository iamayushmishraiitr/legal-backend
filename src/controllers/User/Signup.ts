import { Request, Response } from "express";
import User from "../../Schema/UserSchema";
import { UserI } from "../../interface";
import generateToken from "../../Jwt/generateToken";

const Signup = async (req: Request, res: Response) => {
  const { number ,name, dateOfBirth }: { number: string ,name:string,dateOfBirth:string } = req.body;

  if (!number || !name || !dateOfBirth) {
    return res.status(400).json({ message: "Send Complete Data" });
  }

  try {
    const existingUser: UserI | null = await User.findOne({ number });
    console.log("existing USer" ,existingUser)
    if (existingUser) {
      return res.status(400).json({ message: "Number already registered" });
    }
 console.log("hellow ")
    const newUser = new User({ number ,name,dateOfBirth });
    console.log("new USer" , newUser)
    const savedUser = await newUser.save();
    console.log("saved User" ,savedUser)
    if (!savedUser) {
      return res.status(400).json({ message: "Failed to create new User" });
    }
    const token = generateToken(number, newUser._id.toString());
console.log("token " , token)
    return res.status(201).json({
      message: "User registered successfully",
      token: token,
    });

  } catch (error) {
    console.error("Error during user signup:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default Signup;

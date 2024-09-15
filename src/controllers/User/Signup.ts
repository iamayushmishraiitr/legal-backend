import { Request, Response } from "express";
import User from "../../Schema/UserSchema";
import { UserI } from "../../interface";
import generateToken from "../../Jwt/generateToken";
const Signup = async (req: Request, res: Response) => {
  const {
    number
  }: { number: string } = req.body;
  if (!number)
    return res.status(400).json({ message: "Send Complete Data" });
  try {
    const data: UserI | null = await User.findOne({ number: number });
    if (data)
      return res.status(400).json({ message: "Number already registered" });
    const newUser = new User({
      number,
    });
    console.log(" Adwasdadadsadsadsadasds ")
    // const newuser = await newUser.save();
    // if (!newuser)
    //   return res.status(400).json({ message: "Faild to create new User" });
    const token = generateToken(number,JSON.stringify(newUser._id))
    return res
      .status(201)
      .json({ message: "User registered successfully", token:token});

  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export default Signup;

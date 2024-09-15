import { Request, Response } from "express";
import User from "../../Schema/UserSchema";
import { UserI } from "../../interface";
import generateToken from "../../Jwt/generateToken";

const Signup = async (req: Request, res: Response) => {
  const { number }: { number: string } = req.body;

  if (!number) {
    return res.status(400).json({ message: "Send Complete Data" });
  }

  try {

    const existingUser: UserI | null = await User.findOne({ number });
    if (existingUser) {
      return res.status(400).json({ message: "Number already registered" });
    }

    const newUser = new User({ number });

    // Save new user to the database
    const savedUser = await newUser.save();
    if (!savedUser) {
      return res.status(400).json({ message: "Failed to create new User" });
    }

    // Generate token
    const token = generateToken(number, newUser._id.toString());

    // Send successful response
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

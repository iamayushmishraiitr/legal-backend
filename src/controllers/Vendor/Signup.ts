import { Request, Response } from "express";
import { VendorI } from "../../interface";
import Vendor from "../../Schema/VendorSchema";
import bcrypt from "bcryptjs";
const VendorSignup = async (req: Request, res: Response) => {
  const { name, email, password, phone, address }: VendorI =
    req.body;
  if (!name || !email || !password || !phone || !address )
    return res.status(400).json({ message: "Send Complete Data" });
  const salt = await bcrypt.genSalt(10);
  const hashpassword = await bcrypt.hash(password, salt);
  try {
    const res1 = await Vendor.findOne({ email });
    if (res1)
      return res
        .status(400)
        .json({ message: "User already registered with same email" });
    const res2 = await Vendor.findOne({ phone });
    if (res2)
      return res
        .status(400)
        .json({ message: "User already registered with same phone" });
    const vendor = new Vendor({
      name,
      email,
      password: hashpassword,
      phone,
      address,
      
    });
    const newVendor = await vendor.save();
    if (newVendor)
      return res
        .status(201)
        .json({ message: "User registered successfully", user: newVendor });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export default VendorSignup;

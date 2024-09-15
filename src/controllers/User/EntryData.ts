import { Request, Response } from "express";
import mongoose from "mongoose";
import relation from "../../Schema/RelationSchema";
import Vendor from "../../Schema/VendorSchema";

const entryPoint = async (req: Request, res: Response) => {
  const {
    userId,
    vendorId,
    data,
  }: { userId: string; vendorId: string; data: string } = req.body;

  if (!userId || !vendorId) {
    return res.status(400).json({ message: "Send Complete Data" });
  }
  try {
    let res1 = await relation.findOne({ userId, vendorId});
    if (!res1) {
      res1 = new relation({ userId, vendorId, data: [data] });
      let vendor = await Vendor.findById(vendorId);
      if (!vendor) {
        return res.status(400).json({ message: "Send Valid Vendor Id" });
      }
      vendor.Users.push(new mongoose.Types.ObjectId(userId));
      await vendor.save();
    } else {
      res1.data.push(data);
    }
    await res1.save();
    return res.status(200).json({ message: "Entry Successful" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default entryPoint;

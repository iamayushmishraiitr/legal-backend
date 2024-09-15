import mongoose from "mongoose";
const VendorSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: [/.+@.+\..+/, "Please enter a valid email address"],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    require: true,
    unique: true,
  },
  countryCode: {
    type: String,
    required: true,
  },
  Users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Vendor = mongoose.model("Vendor", VendorSchema);

export default Vendor;

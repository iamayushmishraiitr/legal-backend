import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  number: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  DateOfBirth:{
      type: String ,
      required:true 
  }
  
 
});
const User = mongoose.model("User", UserSchema);
export default User ;
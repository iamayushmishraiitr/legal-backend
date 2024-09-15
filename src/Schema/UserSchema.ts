import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  number: {
    type: String,
    unique: true,
    trim: true,
  },
  dateOfBirth:{
      type: String ,
  }
  
 
});
const User = mongoose.model("User", UserSchema);
export default User ;
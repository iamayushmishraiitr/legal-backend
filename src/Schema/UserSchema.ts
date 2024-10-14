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
  age:{
      type: String ,
  } ,
  gender:{
    type:String
  }
 
});
const User = mongoose.model("User", UserSchema);
export default User ;
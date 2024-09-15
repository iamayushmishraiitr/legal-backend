import mongoose from "mongoose";
const conversationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require:true 
  },
  vendorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vendor",
    require:true
  },
  data: [{
    type: String,
  }],
});
const relation = mongoose.model("relation",conversationSchema)
export default relation 
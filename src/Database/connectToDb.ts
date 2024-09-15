import mongoose  from "mongoose";
const connectTodb=async()=>{
    try {
        await mongoose.connect("mongodb+srv://ayushmishra3358:AMTPBM@cluster0.kucb6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0") ;
        console.log("connected To mongoDB") ;
    } catch (error) {
        console.log("FAILED TO CONNECT" , error)
    } 
}
export default connectTodb ;
//AMTPBM
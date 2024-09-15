import jwt  from "jsonwebtoken"
import dontenv from "dotenv"
dontenv.config() 
const SecretKey = process.env.SECRETKEY || "asd"
const generateToken = (name:string, userId:string) :string => {
  const token = jwt.sign(
    {
     username: name,
      password: userId
    },
    SecretKey,
    { expiresIn: '30d' }
  );
  return token;
};

export default generateToken
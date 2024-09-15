interface VendorI {
  _id:string
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  countryCode :string
}
interface UserI{
  _id:string ;
  name:string ;
  email:string;
  number:string; 
}
export {VendorI ,UserI}
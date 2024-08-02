import User from "../model/user.model.js"
import bcrypt from "bcrypt";

  export const signup=async(req,res)=>{
    try{
        const {fullname,email,password}=req.body;
        const user =await User.findOne({email})
        if(user){
           return res.send("user already exists");
        }
        const hashPassword = await bcrypt.hash(password,10);
 const createUser = new User({
    fullname:req.body.fullname,
    email:req.body.email,
    password:hashPassword,
 })
  await createUser.save();
 res.send("signup successfully");
    }catch(error){
 console.log("error",error);
 res.status(500).json(error);
    }
};


export const login = async (req,res)=>{
   try{
     const {email,password}=req.body;
     const user =await User.findOne({email});
     const isMatch= await bcrypt.compare(password,user.password)
     if(!user || !isMatch){
      return res.send("invalid username or password")
     }else{
      res.send({message:"login successfull",user:{
         _id:user._id,
         fullname:user.fullname,
         email:user.email
     }}) 
     }

   }catch(e){
      console.log(e);
   }
}
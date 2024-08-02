import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
              fullname:String,
              email:{
                type:String,
                unique:true,
                
              },
              password:String
});

const User = new mongoose.model("User",userSchema);

export default User;
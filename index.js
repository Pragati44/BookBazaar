import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bookRoute from "./route/book.route.js";
import  userRoute  from "./route/user.route.js";



const app = express()
const PORT=4000
app.use(cors());
app.use(express.json());
// connect to db
try{
mongoose.connect("mongodb://localhost:27017/Bookstore",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});
console.log("connected to mongodb");
}catch(error){
console.log("error:",error);

}
//define routes

app.use("/book",bookRoute);
app.use("/user",userRoute);



app.listen(PORT, () => {
  console.log(` listening on port ${PORT}`)
})

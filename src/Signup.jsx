import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from "axios";

const Signup = () => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit =async (data)=>{
    const userInfo={
      fullname:data.fullname,
      email:data.email,
      password:data.password
    }
   await axios.post("http://localhost:4000/user/signup",userInfo).then((res)=>{
 console.log(res)
 if(res.data){
alert("signup successfull")
 }
    }).catch((e)=>{
      alert(e)
      console.log(e);
    })
  }
  return (
   <>
   <div className='flex h-screen item-center justify-center border  shadow-md mt-32'>
   <div id="my_modal_3" className="">
  <div className="">
    <form  onSubmit={handleSubmit(onSubmit)} method="div">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
  
    <h3 className="font-bold text-lg ml-28">Signup</h3>
    <div className='mt-4 space-y-2'> 
    <span>Name</span> <br>
    </br>
    <input type="text" placeholder="enter Name" className='w-80 px-3 border border-md outline-none ' 
     {...register("fullname", { required: true })}
    />
    {errors.fullname && (<span className='text-red-600'>This field is required</span>)}

   </div>
   
    
   <div className='mt-4 space-y-2'>
    <span>Email</span>
    <br></br>
    <input type="email" placeholder="enter email" className='w-80 px-3 border border-md outline-none'
     {...register("email", { required: true })}
    ></input>
    {errors.email && (<span className='text-red-600'>This field is required</span>)}

   </div>
   <div className='mt-4 space-y-2'>
    <span>Password</span>
    <br></br>
    <input type="text" placeholder="enter Password" className='w-80 px-3 border border-md outline-none'
     {...register("password", { required: true })}
    ></input>
    {errors.password && (<span className='text-red-600'>This field is required</span>)}

   </div>
<div className='flex justify-around mt-4'>
<button className='bg-pink-500 text-white rounded hover:bg-pink-700 px-3 py-2'>Signup</button>
<p>
  
</p>
</div>
</form>
</div>
</div>
</div>
   </>
  )
}

export default Signup

import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form"

import { Link } from 'react-router-dom'
const Loging = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit =async (data)=>{
    const userInfo={
      
      email:data.email,
      password:data.password
    }
   await axios.post("http://localhost:4000/user/login",userInfo).then((res)=>{
 console.log(res)
 if(res.data){
alert("login successfull")
 }
    }).catch((e)=>{
      alert(e)
      console.log(e);
    })
  }

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link
      to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
      onClick={()=> document.getElementById("my_modal_3").close()}
      >✕
      </Link>
    
    <h3 className="font-bold text-lg">Login</h3>
   <div className='mt-4 space-y-2'>
    <span>Email</span>
    <br></br>
    <input type="email" placeholder="enter email" className='w-80 px-3 border border-md outline-none'
     {...register("email", { required: true })}
    />
    {errors.email && (<span className='text-red-600'>This field is required</span>)}

   </div>
   <div className='mt-4 space-y-2'>
    <span>Password</span>
    <br></br>
    <input type="password" placeholder="enter Password" className='w-80 px-3 border border-md outline-none'
    {...register("password", { required: true })}
    />
    {errors.password && (<span className='text-red-600'>This field is required</span>)}

   </div>
<div className='flex justify-around mt-4'>
<button className='bg-pink-500 text-white rounded hover:bg-pink-700 px-3 py-2'>Login</button>
<p>Not registered ? <Link to="/Signup"className='underline text-blue-400 cursor-pointer'>signup</Link></p>
</div>
   <div>


   </div>
   </form>
  </div>
</dialog>
    </div>
  )
}

export default Loging

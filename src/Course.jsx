import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import axios from "axios";
import {Link} from 'react-router-dom'


const Course = ({item}) => {
  const [book,setBook]=useState([]);
  useEffect(()=>{
    const getBook=async()=>{
      try{
        const res = await axios.get("http://localhost:4000/book");
        console.log(res.data);
        setBook(res.data);
      }catch(e){
        console.log(e);
      }
    };
    getBook();
  },[]);
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 items-center justify-center text-center '>
      <div className='font-semibold  text-black mt-28 '>
    <h1 className='text-3xl md:text-4xl'>
    We are delighted to have you <span className='text-pink-500'>Here:-</span>
    </h1>
    <p className='mt-12'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae reiciendis dolor ducimus quo ab alias at et molestiae culpa nobis, distinctio quia dignissimos, assumenda quibusdam voluptatum fugit rem placeat minus pariatur est atque cupiditate. Facere sequi optio illum veniam incidunt illo rerum perferendis. Ducimus saepe incidunt eveniet vitae facilis distinctio!
    </p>
    <Link to="/">
    <button className="mt-6  bg-pink-500 text-white px-4 py-2 rounded-md  hover:bg-pink-700">Back</button>
    </Link>
    </div>
    <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
      {
        book.map((item)=>
        <Cards item={item}/>)
      }

    </div>
    </div>
    </>
  )
}

export default Course

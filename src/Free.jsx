import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from "axios";

function Free(){



  const [book,setBook]=useState([]);
  useEffect(()=>{
    const getBook=async()=>{
      try{
        const res = await axios.get("http://localhost:4000/book");
       const data = res.data.filter((data)=>data.category==="free");
        setBook(data);
        console.log(data);
      }catch(e){
        console.log(e);
      }
    };
    getBook();
  },[]);





var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

  
  return (
   <>
   <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
  <div>
  <h1 className='font-bold  pb-2 mt-4 text-4xl'>Free Offer Course</h1>
  <p className='mt-2 text-semibold text-xl'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, necessitatibus? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, sunt.
  </p>
   </div>
   
   <div>
   <Slider {...settings}>
        {book.map((item)=>
          <Cards item={item} key={item.id}/>
     )}
      </Slider>
   </div>
   </div>
   </>
  )
}

export default Free

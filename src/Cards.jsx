import React from 'react'

function Cards({item})  {
  return (
   <>
   <div className=''>
   <div className="card bg-base-100 w-96 shadow-xl mt-6 hover:scale-105 duration-200">
  <figure>
    <img
      src={item.image}
      alt="book" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {item.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline cursor-pointer text-black px-2 py-3 hover:bg-pink-500 hover:text-white">Buy now</div>
    </div>
  </div>
</div>
   </div>
   </>
  )
}

export default Cards

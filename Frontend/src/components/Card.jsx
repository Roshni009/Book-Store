import React from 'react'

function Card ({ item }) {
  return (
    <>
    <div className='mt-4 my-3'>
       <div className="card w-96 bg-base-100 shadow-xl hover:scale-105 duration-300">
  <figure><img src={item.image} alt="Book" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.cateogry}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between ">
      <div className="badge badge-outline">{item.price}</div> 
      <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-green-700 hover:text-white duration-300">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Card;
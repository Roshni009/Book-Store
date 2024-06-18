import React, { useEffect, useState } from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Course = () => {
  const [book,setBook] = useState([])
  useEffect(() => {
    const getBook = async () => {
      try{
         const res = await axios.get("http://localhost:4001/book");
         console.log(res.data);
         setBook(res.data)
      }catch (error) {
          console.log("Error :", error);
      }
    }
    getBook();
  }, []);

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <div className='pt-40 items-center justify-center text-center'>
     <h1 className='text-2xl font-semibold md:text-4xl text-black dark:text-white'>We're delighted to have you <span className='text-pink-500'>Here! :)</span></h1>
     <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, iure, minima pariatur blanditiis error consequatur explicabo vel labore excepturi, est natus? Cum dolor rem obcaecati placeat provident nemo voluptate minus.</p>
     <p> Hic debitis labore quisquam tempore accusantium magnam nam dolorem assumenda. Iure expedita excepturi ex tempora molestiae repellat consequuntur debitis sapiente, similique obcaecati?</p>
     <Link to="/">
     <button className="btn btn-outline btn-success  hover:bg-pink-500 mt-5 px-7 rounded-md">Back</button>
     </Link>
     </div>
      <div className=' mt-12 center grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3'>
        {book.map((item) => (
            <Card key={item.id} item={item} />
        ))
        }
      </div>
    </div>
    </>
  )
}

export default Course
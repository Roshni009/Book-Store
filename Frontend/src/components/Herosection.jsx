import React from 'react'
import Freebook from './Freebook';


const Herosection = () => {
  return (
    <>
    <div className="hero-section max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col-reverse md:flex-row pt-12">
        <div className="para-section w-full  md:w-1/2 mt-12 md:mt-32">
         <div className='space-y-6'>
         <h1 className='text-3xl md:text-4xl font-bold text-black dark:text-white'>Hello, welcome to our bookStore. here you learn something <span className='text-green-500'>new everyday!!! </span> </h1>
         <p className='text-xl text-black dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo corporis sint similique! Harum dignissimos modi repellendus sit ad repellat dolorum, inventore maxime quaerat nesciunt earum accusamus expedita molestias animi laudantium.</p>
         <div>
         <label className="input input-bordered flex items-center gap-2 bg-white text-black  border-none dark:bg-slate-900 dark:text-white dark:border">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
          <input type="text" className="grow" placeholder="Email" />
         </label>
         </div>
         <button className="btn btn-outline btn-success hover:bg-green-400 ">Get started</button>
         </div>
         </div>
    
        <div className="image-section w-full md:w-1/2">
          <img  src="/hero-image.png" className='w-92 h-92 ml-0 md:ml-8 mt-8 md:mt-3'  alt="book" />
        </div>
    </div>
    <Freebook />
    </>
  )
}

export default Herosection;
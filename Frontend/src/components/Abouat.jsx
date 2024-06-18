import React from 'react'
import mypic from '../../public/mypic.jpg'

const Abouat = () => {

  return (
   <>

        
      <div className='bg-cover h-screen' style={{backgroundImage: `url(${mypic})`}}>
      <div class="absolute bottom-0 px-4 py-3 bg-gray-500/50 w-full">
      <h1 class="text-white font-semibold text-4xl"> Roshni Kumari </h1>
      <p class="text-gray-200">
       I'm a Frontend Developer.
      </p>
      </div>
      </div>
      
       

   </>
  )
}

export default Abouat;
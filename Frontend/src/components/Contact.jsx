import React from 'react'
import { useForm } from 'react-hook-form'
const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => console.log(data);
  return (
    <>
    <div className='flex h-screen container mx-auto items-center justify-center md:px-20 px-4'>
    <div className='w-[600px]'>
         <form onSubmit={handleSubmit(onSubmit)}  >
           <h3 className="font-bold text-2xl text-black dark:text-white">Contact Us</h3>
           <div className='mt-4 space-y-2'>
            <span className='text-black dark:text-white'>Name</span>
            <br />
            <input type="text" placeholder='Enter Your name' className=' w-96 px-3 py-1 border rounded-md outline-none bg-white text-black' {...register("name", { required: true })}/>
            <br />
            {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            <div className='mt-4 space-y-2'>
            <span className='text-black dark:text-white'>Email</span>
            <br />
            <input type="email" placeholder='Enter email address' className='w-96 px-3 py-1 border rounded-md outline-none bg-white text-black'{...register("email", { required: true })}/>
            <br />
            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            <div className='mt-4'>
            <span className='text-black dark:text-white'>Message</span>
            <br />
            <textarea name="message" id="message" cols="46" rows="5" placeholder=" &nbsp;Type your message" className='bg-white border outline-none text-black' {...register("message", { required: true })}></textarea>
            </div>
           
           <button className='bg-blue-500 px-3 py-1 text-white rounded-md mt-4 hover:bg-blue-700 duration-300'>Submit</button>
       
        </form>
       </div>
      </div>   

    </>
  )
}

export default Contact
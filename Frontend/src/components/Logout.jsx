import React from 'react'
import { useAuthor } from '../context/AuthorProvider'
import toast from 'react-hot-toast'

const Logout = () => {

    const [authorUser, setAuthorUser] = useAuthor()

    const handleLogout = () => {
        try{
          setAuthorUser({
             ...authorUser,
             user:null,
          })
          localStorage.removeItem("Users")
          toast.success("Logout successfully")

          setTimeout(() => {
            window.location.reload();
          },1000);
       
        }catch(error) {
            toast.error("Error: " + error.message)
            setTimeout(() => {},2000)
        }
    }
  return (
    <div>
        <button className='ml-4 px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick={handleLogout}>
          Logout  
        </button>
    </div>
  )
}

export default Logout

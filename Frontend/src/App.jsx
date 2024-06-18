import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import Courses from './courses/Courses'
import Signup from './components/Signup'
import ContactUs from './contact/ContactUs'
import About from './about/About'
import  { Toaster } from 'react-hot-toast';
import { useAuthor } from './context/AuthorProvider';

const App = () => {

  const [authorUser, setAuthorUser] = useAuthor()
  console.log(authorUser);
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/courses' element={authorUser ?<Courses /> : <Navigate to="/signup" />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<ContactUs />} />
     </Routes>
     <Toaster />
    </div>
    </>
  )
}

export default App


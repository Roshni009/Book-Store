import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const ContactUs = () => {
  return (
    <>
    <Navbar />
    <div className='min-h-screen'>
    <Contact />
    </div>
    <Footer />
    </>
  )
}

export default ContactUs;
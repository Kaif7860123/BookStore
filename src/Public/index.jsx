import React from 'react'
import Navbar from '../Pages/Navbar'
import Footer from '../Pages/Navbar/footer'

function Public({element}) {
  return (
    <>
      <Navbar/>
      {
        element
      }
      <Footer/>
    </>
  )
}

export default Public

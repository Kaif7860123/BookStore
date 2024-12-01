 import React from 'react'
import Home from './Pages/Navbar/Home'
 import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Public from './Public'
import Course from './Pages/Navbar/Course'
import Login from './Pages/Navbar/register'
import Register from './Pages/Navbar/register'
 function App() {
   return (
     <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Public element={<Home/>}></Public>}></Route>
      <Route path='/course' element={<Public element={<Course/>}></Public>}></Route>
      <Route path='/register' element={<Register/>}></Route>
     </Routes>
     </BrowserRouter>
      {/* <Navbar />
      <Home/>
      <Card/>   
    <Footer/> */}
     </>
   )
 }
 
 export default App
 
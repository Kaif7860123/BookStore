import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import { IoSearchSharp } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
function Navbar() {
  const[email,setEmail]=useState("")
  const[password,setPasword]=useState("")
    const[sticky,setSticky]=useState(false)
    useEffect(()=>{
        const handleScroll=()=>{
            if(window.scrollY>0){
                setSticky(true)
            }
            else{
                setSticky(false)
            }
        }
        window.addEventListener("scroll",handleScroll)
        return()=>{
            window.removeEventListener("scroll",handleScroll)
        }
    },[])
    const jump=useNavigate()
    const goToRegister=()=>{
  jump('/register')
    }
const handleSubmit=()=>{
  if(email.length>0&&password.length>0){
    alert("success")
  }
  else{
    alert("please enter required field")
  }
}    
  return (
    <>
      <div className={` ${styles.container} ${sticky?styles.all:""}`}>
        <div className={styles.navCont}>
        <h2>Book Store</h2>
        <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/course"><li>Course</li></Link>

            <Link to="/contact"><li>Contact</li></Link>

            <Link to="/about"><li>About</li></Link>

        </ul>
        <div className={styles.inputCont}>
        <input type='text' placeholder='Search books'/>
        <span><IoSearchSharp/></span>
        </div>
        {/* <div>
        <button>login</button>
        </div> */}


<div><button   type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
  login
</button>
</div>

<div className="modal" id="myModal">
  <div className="modal-dialog">
    <div className="modal-content">

     
      <div className="modal-header">
        <h4 className="modal-title"> Login Page</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
      </div>

      
      <div className="modal-body">
         <input type='email' onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='enter your email' className='form-control '/>
      </div>
       {(email.length>0&&email.includes("@gmail.com"))? "":<p  className={styles.error}>this field is required</p>}
      <div className="modal-body">
         <input type='password' required onChange={(e)=>setPasword(e.target.value)} value={password} placeholder='enter password' className='form-control'/>
      </div>
      {(password.length>0 )? "":<p  className={styles.error}>this field is required</p>}
      
     


      <div className={styles.submitBtn}>
             <button onClick={handleSubmit}>sign in</button>
             <span> Not registered? &nbsp;
                <span onClick={goToRegister}  style={{color:"green",textAlign:"right", cursor:"pointer"}}>Register</span>
             </span>
             </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>



    </div>
  </div>
</div>
       
      </div>
      </div>
    </>
  )
}

export default Navbar

import React, { useState } from 'react'
import styles from './index.module.css'
import { useNavigate } from 'react-router-dom'
function Register() {
  const[email,setEmail]=useState("")
  const[name,setname]=useState("")
  const[password,setPasword]=useState("")
  const jump=useNavigate()
  const goToHome=()=>{
    jump('/')
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
      <div className={styles.container} id='login_modal'>
        <div className={styles.login}>
            <h3>Register page</h3>
            <p>User Name</p>
            <input type='text' onChange={(e)=>setname(e.target.value)} placeholder='enter user name' value={name} />
      {(name.length>0 )? "":<p  style={{color:"red"}}>this field is required</p>}

            <p>Email</p>
            
            <input type='email' placeholder='enter email' value={email} onChange={(e)=>setEmail(e.target.value)} />
            {(email.length>0&&email.includes("@gmail.com"))? "":<p style={{color:"red"}}>this field is required</p>}
      
            
            <p> Password</p>
            <input type='text' placeholder='enter password' value={password} onChange={(e)=>setPasword(e.target.value)} />
      {(password.length>0 )? "":<p  style={{color:"red"}}>this field is required</p>}
           
           <div className={styles.submitBtn}>
             <button onClick={handleSubmit}>Sign up</button>
             <span>  registered? &nbsp;
                <span onClick={goToHome} style={{color:"rgb(232,14,231)",textAlign:"right", cursor:"pointer"}}>login</span>
             </span>
             </div>
        </div>
      </div>
    </>
  )
}

export default Register

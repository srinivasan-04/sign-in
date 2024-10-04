import React from 'react'
import './sign.css'
import { useState } from 'react';
import user_icon from './assest/person.png';
import email_icon from './assest/email.png';
import pass_icon from './assest/password.png';
function Sign() {
  const[action,setAction]=useState("Sign Up");
  return (
    <div className='container'>
      <div className='header'>
            <div className='text'>
              {action}
            </div>
            <div className='underline'></div>
      </div>
      <div className='inputs'>
        <div className={action==="Login"?"input hid":"input"}>
          <img src={user_icon} alt='user_icon' className='user_icon' />
          <input type='text' placeholder='Name' />
        </div>

        <div className='input'>
          <img src={email_icon} alt='user_icon' className='user_icon' />
          <input type='mail' placeholder='Email Id' />
        </div>

        <div className='input'>
          <img src={pass_icon} alt='user_icon' className='user_icon' />
          <input type='password' placeholder='Password' />
        </div>
      </div>
      <div className={action==="Sign Up"?"forget hid":"forget"}> Forget Password ? <span>Click here</span></div>
      <div className='submit-container'>
        <div className={action==="Login"? "submit grey":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign up</div>
        <div className={action==="Sign Up"? "submit grey":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
      </div>
    
      
    </div>
  )
}

export default Sign

import React from 'react'

const Register = () => {
  return (
    <div className='formContainer'>
    <div className='formWrapper'>
    <span className='logo'>React Chat</span>
    <span className='title'>Register</span>
    <form>
        <input type="text" placeholder='Name' />
        <input type="email" placeholder='email'/>
        <input type="password" placeholder='password' />
        <input style={{display: "none"}} type="file" id='file' />
        <label htmlFor="file">
            hey
        </label>
        <button>Sign up</button>
    </form>
    <p>I have already an account.  LogIn</p>
    </div>
    </div>
  )
}

export default Register

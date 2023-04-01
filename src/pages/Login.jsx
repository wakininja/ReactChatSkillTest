import React from 'react'

const Login= () => {
  return (
    <div className='formContainer'>
    <div className='formWrapper'>
    <span className='logo'>ReactChat</span>
    <span className='title'>Login</span>
    <form>
        <input type="email" placeholder='email'/>
        <input type="password" placeholder='password' />
        <button>Login</button>
    </form>
    <p>You don't have an account.  Register</p>
    </div>
    </div>
  )
}

export default Login;

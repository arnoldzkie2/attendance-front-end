import React from 'react'
import './auth.css'

const Register = () => {
  return (
    <form className="auth">
      <div className="two">
        <input type="text" placeholder='First name' />
        <input type="text" placeholder='Last name' />
      </div>
      <input type="text" placeholder='Email address' />
      <div className="two">
        <input type="password" placeholder='Create password' />
        <input type="password" placeholder='Confirm password' />
      </div>
      <button>Sign up</button>
    <div className="auth-footer">Already signed up? <span>Login</span></div>
    </form>
  )
}

export default Register

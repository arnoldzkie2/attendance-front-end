import React from 'react'
import './auth.css'
const Login = () => {
  return (
    <form className="auth">
      <input type="text" placeholder='Email address' />
        <input type="password" placeholder='Password' />
      <button>Log in</button>
    <div className="auth-footer">Don't have account yet? <span>Sign up</span></div>
    </form>
  )
}

export default Login

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginPage= () => {
  const [userData, setUserData] = useState({password: "", email: ""})

  // function to change controlled inputs
  const changeInputHandler = (e)=> {
    setUserData(prevState =>{
      return {...prevState, [e.target.name]: e.target.value}
    })
  }

  return (
    <section className="register">
      <div className="register_container">
        <h2>Sign In</h2>
        <form>
          <p className="form_error-message">Any error from the backend</p>
          
          <input 
            type="email" 
            name="email"
            className="email"
            placeholder='Email Address'
            onChange={changeInputHandler} 
            autoComplete='true' 
          />
          <input 
            type="password" 
            name="password"
            className="password" 
            placeholder='Password' 
            onChange={changeInputHandler} 
            autoComplete='true' 
          />

          {/* Forgot Password link */}
          <p style={{ textAlign: 'right', margin: '0.5rem 0' }}>
            <Link to='/forgot-password'>Forgot Password?</Link>
          </p>

          <p>
            Don't have an account? <Link to='/register'>Sign Up</Link>
          </p>

          <button type='submit' className="btn primary">Login</button>
        </form>
      </div>
    </section>
  )
}

export default LoginPage

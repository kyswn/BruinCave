import React from "react";
import './forms/Form1.css';


export class Login extends React.Component {
  

  render() {
    return (
     <>
     <div className= 'login'>
      <div className='form-container-small'>
        <div className='form-content'>
          <form className='form'>
            <h1 style={{ fontFamily: "Roboto" }}>
              <b>Log In</b>
            </h1>
        
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
          />
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
          />
        </div>
        <button className='form-input-btn'>
        Log In
        </button>
        <span className='form-input-login'>
          Do not have an account? Signup <a href='http://localhost:3000/signup'>here</a>
        </span>
        
    </form>
    </div>
      </div>
      </div>
    </>
    );
  }
}

export default Login;
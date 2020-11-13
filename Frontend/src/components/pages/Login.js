/*import React from 'react';
import '../../App.css';

export default function Login() {
  return <h1 className='login'>Login</h1>;
}*/
import React from "react";
import { Button } from "../Button";
import './forms/Form1.css';


export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
     <>
     <div className= 'login'>
      <div className='form-container-small'>
        <div className='form-content'>
          <form className='form'>
            <h1>
              Log In
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
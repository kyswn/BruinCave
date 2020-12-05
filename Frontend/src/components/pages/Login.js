import React, { useState } from "react";
import './forms/Form1.css';
import { post } from '../../utils/request'
import { withRouter } from 'react-router-dom';
import store from '../../Store/index';


  //function to change id state in redux
function changeID(para){
    const action = {
        type: 'changeid',
        value: para,
    }
    store.dispatch(action);
}

function Login({ history }) {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  return (
    <>
      <div className='login'>
        <div className='form-container-small'>
          <div className='form-content'>
            <div className='form'>
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
                  onChange={e => setEmail(e.target.value)}
                />
                <br/>
              </div>
              <div className='form-inputs'>
                <label className='form-label'>Password</label>
                <input
                  className='form-input'
                  type='password'
                  name='password'
                  onChange={e => setPassword(e.target.value)}
                  placeholder='Enter your password'
                />
              </div>
              <button className='form-input-btn' onClick={e => {
                e.stopPropagation()
                post('/users/login', { Email: email, Password: password }).then(res => {
                  console.log(res.UserID);
                  window.userId = res.UserID;
                  changeID(res.UserID);
                  console.log(window.userId);
                  history.replace('/');
                })
              }}>
                Log In
                </button>
              <span className='form-input-login'>
                Do not have an account? Signup <a href='http://localhost:3001/signup'>here</a>
              </span>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(Login);

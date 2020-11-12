/*import React from 'react';
import '../../App.css';

export default function Login() {
  return <h1 className='login'>Login</h1>;
}*/
import React from "react";
import { Button } from "../Button";

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
        <Button buttonStyle='btn--outline'>Login</Button>
        </div>
      </div>
    );
  }
}

export default Login;
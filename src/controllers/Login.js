import React from 'react';
import '../css/Login.css';
import { NavLink } from 'react-router-dom';


class Login extends React.Component{
  render(){
  return (
      <div className="Login">
          <div>
          <form onSubmit={this.handleSubmit}>
            <div className="login-field">
              <label>Username</label>
              <br/>
              <input
                name="username"
                placeholder="username"
              />
              <br/>
              <label>Password</label>
              <br/>
              <input
                name="password"
                placeholder="password"
                />
                <br/>
              <button type="submit">
              Login
              </button>
            </div>
            <br/>
          </form>
          <NavLink to="/main">
            Main Menu
          </NavLink>
          <p />
          <NavLink to="/">
            Title Menu
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Login;

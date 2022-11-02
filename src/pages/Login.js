import React from "react";
import { createBrowserHistory } from 'history';

const Login = () => {
  const history = createBrowserHistory({
    forceRefresh: true
  });
  return (
    <div className="login-container ">
      <div class="login-box">
        <h2>Login</h2>
        <form>
          <div class="user-box">
            <input type="text" name="" required="" />
            <label>Username</label>
          </div>
          <div class="user-box">
            <input type="password" name="" required="" />
            <label>Password</label>
          </div>
          <center>
            {" "}
            <a href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Login
            </a>
          </center>
          <center>
            <a href="/register">
            <span></span>
                <span></span>
                <span></span>
                <span></span>
                Register
            </a>
          </center>
        </form>
      </div>
    </div>
  );
};

export default Login;

import React from "react";

const Register = () => {
  return (
    <div className="login-container ">
      <div class="login-box">
        <h2>Register</h2>
        <form>
          <div class="user-box">
            <input type="text" name="" required="" />
            <label>Username</label>
          </div>
          <div class="user-box">
            <input type="password" name="" required="" />
            <label>Password</label>
          </div>
          <div class="user-box">
            <input type="password" name="" required="" />
            <label>Re Password</label>
          </div>
          <center>
            {" "}
            <a href="#">
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

export default Register;

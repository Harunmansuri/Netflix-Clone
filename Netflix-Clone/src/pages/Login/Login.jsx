import React from "react";
import { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";

function Login() {
  const [signState, setSignState] = useState("Sign In");

  return (
    <div className="login">
      <img src={logo} alt="Netflix Logo" className="login-logo" />
      <div className="login-form"> 
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ? (
            <input type="text" placeholder="Your Name" required />
          ) : (
            <></>
          )}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <p>
              <a href="#">Need help?</a>
            </p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>
              New to Netflix? <a onClick={() => setSignState("Sign Up")} href="#">Sign Up Now.</a>
            </p>
          ) : (
            <p>
              Already have an account? <a onClick={() => setSignState("Sign In")} href="#">Sign In</a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;

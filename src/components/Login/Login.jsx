import React, { useContext } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const { signin } = useContext(AuthContext);
  const handlelogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signin(email,password)
    .then((result) => {
 
      const loggeduser = result.user;
      console.log(loggeduser);
      form.reset()

    })
    .catch((error) => {
      console.log(error);
   
    });
    
  }

  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handlelogin}>
        <div className="form-control">
          <label htmlFor="emali">Email</label>
          <input
            type="email"
            name="email"
            id=""
            required
            placeholder="Input Your Email"
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id=""
            required
            placeholder="Password"
          />
        </div>
        <input className="btn-submit" type="submit" value="Login" />
      </form>
      <p>
        <small>
          New to Ema-john? <Link to="/singup">Create New Account</Link>
        </small>
      </p>
    </div>
  );
};

export default Login;

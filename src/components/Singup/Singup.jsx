import React, { useState } from "react";
import "./Singup.css";
import { Link } from "react-router-dom";

const Singup = () => {
const[error,seterror]=useState('')
const handleSignup=event=>{
    event.preventDefault();

    const form=event.target;
    const email=form.email.value;
    const password= form.password.value;
    const confirm= form.confirm.value;
    console.log(email,password,confirm);
    if(password !==confirm){
        seterror('password is wrong')
        return
    }
    else if(password.length<6){
        seterror('please inter 6 digit')
        return
    }
}

  return (
    <div className="form-container">
      <h2 className="form-title">Sign up</h2>
      <form onSubmit={handleSignup}>
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
        <div className="form-control">
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            name="confirm"
            id=""
            required
            placeholder="Password"
          />
        </div>
        <input className="btn-submit" type="submit" value="Sign up" />
      </form>
      <p>
        <small>
          Already have an account?<Link to="/login">Login</Link>
        </small>
      </p>
      <p className="text-error">{error}</p>
    </div>
  );
};

export default Singup;

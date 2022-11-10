import React from 'react';
import './Signin.css';
import { useState } from "react";

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [allEntry, setAllEntry] = useState([]);

  var regEmail = /^[a-zA-Z0-9.!#$%&*+/=?^_{|}]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;
  // var regPassword = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  var regPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  let url="Signup.js";

  const submitForm = (e) => {
    e.preventDefault();
    if(email.trim() === "" || email.trim() == null || !regEmail.test(email)){
      alert("Please enter email correctly.")
    }
    else if (password.trim() === "" || password.trim() == null || password.trim().length < 8 ||
    !regPassword.test(password)){
      alert("Please enter password correctly.");
    }
    else {
      const newEntry = { id: new Date().getTime().toString(), email, password };
      setAllEntry([...allEntry, newEntry]);
      console.log(allEntry);
    }
  }
  return (
    <div>
      <div className="grid-item item1"></div>
      <div className="grid-item logininfo">
        <form action="" onSubmit={submitForm}>
          <h1>Sign In</h1>
          <label htmlFor="email">Email:*</label><br></br>
          <input type="text" id="email" autoComplete="off" placeholder="email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
          ></input>
          <br></br>
          <br></br>
          <label htmlFor="password">Password:*</label><br></br>
          <input type="password" id="password" autoComplete="off" placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          ></input>
          <br></br>
          <br></br>
          <button type="submit">Submit</button>
          <br></br>
          <br></br>
          <h2>Don't have an account? <a href={url}>Sign-Up</a></h2>
        </form>
      </div>
      <div className="grid-item item2"></div>
    </div>
  )
}

export default Signin;

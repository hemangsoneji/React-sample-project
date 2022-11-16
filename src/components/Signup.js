import React from 'react';
import './Signup.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import { FormLabel, FormControl, FormControlLabel, Radio, RadioGroup, Stack, TextField } from '@mui/material';
import axios from 'axios';

export const Signup = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [gender, setGender] = useState("male");
  const [birthDate, setBirthDate] = useState("");

  const [allEntry, setAllEntry] = useState([]);

  var qs = require('qs');
  var data = qs.stringify({
    'email': 'hemangsoneji@gmail.com',
    'password': 'Hemang@12345',
    'lastname': 'soneji',
    'firstname': 'hemang',
    'phone_number': '8655240076',
    'gender': 'Male'
  });
  var config = {
    method: 'post',
    url: 'https://therecipepool.pythonanywhere.com/account/signup/',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: data
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });


  var regName = /^[A-Za-z]+[A-Za-z]+$/;
  var regContactNumber = /^[7-9]\d{9}$/;
  var regEmail = /^[a-zA-Z0-9.!#$%&*+/=?^_{|}]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;
  var regPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  const submitForm = (e) => {
    e.preventDefault();
    if (fname.trim() === "" || fname.trim() == null || fname.trim().length < 3 || fname.trim().length > 25 ||
      !regName.test(fname)) {
      alert("Please enter first name correctly.");
      return false;
    }
    else if (lname.trim() === "" || lname.trim() == null || lname.trim().length < 3 || lname.trim().length > 25 ||
      !regName.test(lname)) {
      alert("Please enter last name correctly.");
    }
    else if (email.trim() === "" || email.trim() == null || !regEmail.test(email)) {
      alert("Please enter email correctly.");
      return false;
    }
    else if (contactNumber.trim() === "" || contactNumber.trim() == null || contactNumber.trim().length !== 10
      || !regContactNumber.test(contactNumber)) {
      alert("Please enter contact number correctly.");
      return false;
    }
    else if (password.trim() === "" || password.trim() == null || password.trim().length < 8 ||
      !regPassword.test(password)) {
      alert("Password should contain 1 uppercase,1 lowercase, a number and a special character.Please enter a stronger password.");
      return false;
    }
    else if (cpassword !== password) {
      alert("Confirm password does not match password. Please enter password correctly.");
      return false;
    }
    else {
      const newEntry = { id: new Date().getTime().toString(), fname, lname, email, contactNumber, password, cpassword, gender, birthDate };
      setAllEntry([...allEntry, newEntry]);
      console.log(allEntry);
    }
  }

  return (
    <div>
      <div className="grid-item item1"></div>
      <div className="grid-item logininfo">
        <h2>User Sign-Up Page</h2>
        <form onSubmit={submitForm}>
          <label htmlFor="name">First Name:*</label><br></br>
          <input type="text" id="fname" autoComplete="off" placeholder="first name" autoFocus
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          ></input>
          {/* <TextField
          id="fname"
          label="First Name:*"
          placeholder="first name"
          autoFocus
          value={fname}
          nChange={(e) => setFname(e.target.value)}
          autoComplete="off"
        /> */}
          <br></br>
          <br></br>
          <label htmlFor="name">Last Name:*</label><br></br>
          <input type="text" id="lname" autoComplete="off" placeholder="last name"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          ></input>
          <br></br>
          <br></br>
          <label htmlFor="email">Email:*</label><br></br>
          <input type="text" id="email" autoComplete="off" placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <br></br>
          <br></br>
          <label htmlFor="contactNumber">Contact Number:*</label><br></br>
          <input type="text" id="number" autoComplete="off" placeholder="contact number"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          ></input>
          <br></br>
          <br></br>
          <FormControl>
            <FormLabel id="gender">Gender</FormLabel>
            <RadioGroup
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
          <br></br>
          <br></br>
          <Stack component="form" noValidate spacing={3} />
          <TextField
            id="birthDate"
            label="Birth Date*"
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            defaultValue="2022-11-08"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br></br>
          <br></br>
          <label htmlFor="password">Password:*</label><br></br>
          <input type="password" id="password" autoComplete="off" placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <br></br>
          <br></br>
          <label htmlFor="cpassword">Confirm Password:*</label><br></br>
          <input type="password" id="cpassword" autoComplete="off" placeholder="confirm password"
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
          ></input>
          <br></br>
          <br></br>
          <button type="submit">Submit <Link to="/enter"></Link></button>
          <h2>Already Signed-Up? <Link to="/signin">Signin</Link></h2>
        </form>
      </div>
      <div className="grid-item item2"></div>
      {/* <div>
        {
          allEntry.map((data) => {
            const { id, name, email, contactNumber, gender, password, cpassword } = data;
            return (
              <div className="showDataStyle" key={id}>
                <p>{name}</p>
                <p>{email}</p>
                <p>{contactNumber}</p>
                <p>{gender}</p>
                <p>{password}</p>
                <p>{cpassword}</p>
              </div>
            )
          })
        }
      </div> */}
    </div>
  )
}

export default Signup;
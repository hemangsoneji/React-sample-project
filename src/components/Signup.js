import React from 'react';
import './Signup.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import { FormLabel, FormControl, FormControlLabel, Radio, RadioGroup, Stack, TextField, Button, Box, Grid } from '@mui/material';
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
    
    'email': email,
    'password': password,
    'lastname': lname,
    'firstname': fname,
    'phone_number': contactNumber,
    'gender': gender
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
// 'email': 'hemangsoneji@gmail.com',
    // 'password': 'Hemang@12345',
    // 'lastname': 'soneji',
    // 'firstname': 'hemang',
    // 'phone_number': '8655240076',
    // 'gender': 'Male'

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
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      <Grid container spacing={3}>
        <Grid xs></Grid>
        <Grid xs={60}>
          <h2>User Sign-Up Page</h2>
          <form onSubmit={submitForm}>
            <TextField
              id="fname"
              label="First Name:*"
              type="search"
              autoComplete="off"
              autoFocus
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
            <br></br>
            <br></br>
            <TextField
              id="lname"
              label="Last Name:*"
              type="search"
              autoComplete="off"
              autoFocus
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
            <br></br>
            <br></br>
            <TextField
              id="email"
              label="Email:*"
              type="search"
              autoComplete="off"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br></br>
            <br></br>
            <TextField
              id="number"
              label="Contact Number:*"
              type="search"
              autoComplete="off"
              autoFocus
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
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
            <TextField
              id="password"
              label="Password:*"
              type="password"
              autoComplete="off"
              autoFocus
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br></br>
            <br></br>
            <TextField
              id="cpassword"
              label="Confirm Password:*"
              type="password"
              autoComplete="off"
              autoFocus
              value={cpassword}
              onChange={(e) => setCpassword(e.target.value)}
            />
            <br></br>
            <br></br>
            <Button variant="contained" type="submit">Submit <Link to="/enter"></Link></Button>
            <h2>Already Signed-Up? <Link to="/">Signin</Link></h2>
          </form>
        </Grid>
        <Grid xs></Grid>
      </Grid>
    </Box >
  )
}
//  <div>
//       // to display the data
//         {
//           allEntry.map((data) => {
//             const { id, name, email, contactNumber, gender, password, cpassword } = data;
//             return (
//               <div className="showDataStyle" key={id}>
//                 <p>{name}</p>
//                 <p>{email}</p>
//                 <p>{contactNumber}</p>
//                 <p>{gender}</p>
//                 <p>{password}</p>
//                 <p>{cpassword}</p>
//               </div>
//             )
//           })
//         }
//       </div> 


export default Signup;
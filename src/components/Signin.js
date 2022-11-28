import React from 'react';
import './Signin.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { Button, TextField, Box, Grid } from '@mui/material';

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [allEntry, setAllEntry] = useState([]);

  var qs = require('qs');
  var data = qs.stringify({
    'email': 'hemang@gmail.com',
    'password': 'Hemang@12345'
  });
  var config = {
    method: 'post',
    url: 'https://therecipepool.pythonanywhere.com/account/login/',
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
  
    // var axios = require('axios');
    var qs1 = require('qs');
    var data1 = qs1.stringify({
      'refresh': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2OTIyMjExOSwiaWF0IjoxNjY4NjE3MzE5LCJqdGkiOiI1Zjg5MmFlYzdkYTA0MzkwODM3NGM4YTY5NzQxMmM0MCIsInVzZXJfaWQiOjM4fQ.mB0pkot17XV2Cri0AKR-QfNErk6MGLokY8MOa1RrdWE\n' 
    });
    var config1 = {
      method: 'post',
      url: 'https://therecipepool.pythonanywhere.com/account/token-refresh/',
      headers: { 
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY4ODc2NTE5LCJpYXQiOjE2Njg2MTczMTksImp0aSI6IjU3OGM2MWY0OGJiYzQ3MDA5YzBiNjZmOWRiNzJkZjA3IiwidXNlcl9pZCI6Mzh9.GzbUdRyS7Pq3McOruNPUZOb9BSlj9Ep2VZu32ilpgRk', 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data1 : data1
    };
    
    axios(config1)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
      
  var regEmail = /^[a-zA-Z0-9.!#$%&*+/=?^_{|}]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;
  var regPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  const submitForm = (e) => {
    e.preventDefault();
    if (email.trim() === "" || email.trim() == null || !regEmail.test(email)) {
      alert("Please enter email correctly.")
    }
    else if (password.trim() === "" || password.trim() == null || password.trim().length < 8 ||
      !regPassword.test(password)) {
      alert("Please enter password correctly.");
    }
    else {
      const newEntry = { id: new Date().getTime().toString(), email, password };
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
          <form onSubmit={submitForm}>
            <h1>Sign In</h1>
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
            <Button variant="contained" type="submit">Submit <Link to="/enter"></Link></Button>
            <br></br>
            <br></br>
            <h2>Don't have an account? <Link to="/signup">Signup</Link></h2>
          </form>
        </Grid>
      </Grid>
      <Grid xs></Grid>
    </Box>
  )
}

export default Signin;
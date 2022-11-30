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
    'email': email,
    'password': password
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
      const a = response.data;
      const b = JSON.stringify(response.data);
      console.log(a);
      localStorage.setItem('rt', a.refresh_token);
      localStorage.setItem('at', a.access_token);
      ref();
      // console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

  const ref = () => {
    var qs = require('qs');
    var data = qs.stringify({
      // 'refresh': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2OTIyMjExOSwiaWF0IjoxNjY4NjE3MzE5LCJqdGkiOiI1Zjg5MmFlYzdkYTA0MzkwODM3NGM4YTY5NzQxMmM0MCIsInVzZXJfaWQiOjM4fQ.mB0pkot17XV2Cri0AKR-QfNErk6MGLokY8MOa1RrdWE\n' 
      'refresh': localStorage.getItem("refresh_token")
    });
    var config = {
      method: 'post',
      url: 'https://therecipepool.pythonanywhere.com/account/token-refresh/',
      headers: {
        // 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY4ODc2NTE5LCJpYXQiOjE2Njg2MTczMTksImp0aSI6IjU3OGM2MWY0OGJiYzQ3MDA5YzBiNjZmOWRiNzJkZjA3IiwidXNlcl9pZCI6Mzh9.GzbUdRyS7Pq3McOruNPUZOb9BSlj9Ep2VZu32ilpgRk', 
        'Authorization': localStorage.getItem("access_token"),
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        const a = response.data;
        console.log(JSON.stringify(response.data));
        // setSucc("Logged in.");
        localStorage.setItem('rt',a.refresh_token);
        localStorage.setItem('at',a.access_token);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

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
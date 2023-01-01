import React from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import axios from 'axios';
import { useState, useEffect } from "react";
// import { TabContext, TabList, TabPanel } from '@mui/lab';

export const Home = () => {
    const [food, setFood] = useState("breakfast");
    var x = localStorage.getItem("token");
    const search = () => {
        // console.log("Hello");
        var data = '{\r\n    "meal" : [ food ]\r\n}';
        // var x = localStorage.getItem("token");
        console.log(x);
        var config = {
            method: 'post',
            url: 'https://therecipepool.pythonanywhere.com/api/filter-meal/',
            headers: {
                'Authorization': "Bearer " + x,
                'Content-Type': 'application/json'
                // 'Content-Type': 'text/plain'
                // 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY4ODc2NTE5LCJpYXQiOjE2Njg2MTczMTksImp0aSI6IjU3OGM2MWY0OGJiYzQ3MDA5YzBiNjZmOWRiNzJkZjA3IiwidXNlcl9pZCI6Mzh9.GzbUdRyS7Pq3McOruNPUZOb9BSlj9Ep2VZu32ilpgRk'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                console.log(response.data[0]);
                console.log(response.data[0].id);
                // localStorage.setItem('t', a.token);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    const [value, setValue] = React.useState('one');

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    useEffect(
        () => {
            search();
        }, [food]
    )

    const searchb = () => {
        let f = document.getElementById('breakfast').value
        setFood("breakfast")

        console.log(food)
    }
    const searchl = () => {
        let f = document.getElementById('lunch').value
        setFood("lunch")
        console.log(food)
    }
    const searchd = () => {
        let f = document.getElementById('dinner').value
        setFood("dinner")
        console.log(food)
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="wrapped label tabs example"
            >
                <Tab value="one" id="breakfast" onClick={searchb} label="BREAKFAST" />
                <Tab value="two" id="lunch" onClick={searchl} label="LUNCH" />
                <Tab value="three" id="dinner" onClick={searchd} label="DINNER" />
            </Tabs>
        </Box>
    );
}

export default Home;
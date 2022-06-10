import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import WeatherWidget from '../components/WeatherWidget'

const Home = () => {


    return (
        <div className="home">
            <h1>HELLO I AM HOME! NICE TO MEET YOU! EXDEE</h1>
            <Typography component="h2" variant="h6" color="red" gutterBottom>
                something
                <Button variant="contained">hello</Button>
                <WeatherWidget></WeatherWidget>
            </Typography>
        </div>
    )
}

export default Home
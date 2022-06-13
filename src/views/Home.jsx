import * as React from 'react'
import Grid from '@mui/material/Grid'
import WeatherWidget from '../components/WeatherWidget'
import JokeWidget from '../components/JokeWidget'
import LocalTime from '../components/LocalTime'

const Home = () => {
  return (
    <div className="home">
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="stretch"
        spacing={0.5}
      >
        <Grid item xs={12} sm={6} md={4}>
          <WeatherWidget />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <LocalTime />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <JokeWidget />
        </Grid>
      </Grid>
    </div>
  )
}

export default Home

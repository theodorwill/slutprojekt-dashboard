import * as React from 'react'
import Grid from '@mui/material/Grid'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import WeatherWidget from '../components/WeatherWidget'
import QuoteWidget from '../components/QuoteWidget'
import LocalTime from '../components/LocalTime'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#693250',
      },
      secondary: {
        main: '#875b73',
      },
    },
    typography: {
      fontFamily: ['Quicksand', 'sans-serif'].join(','),
    },
  })

  return (
    <div className="home">
      <ThemeProvider theme={theme}>
        <Header />
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="stretch"
          spacing={0.5}
          rowSpacing={0.5}
        >
          <Grid item xs={12} sm={6} md={6}>
            <WeatherWidget />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <LocalTime />
          </Grid>
          <Grid item xs={12} sm={6} md={12}>
            <QuoteWidget />
          </Grid>
        </Grid>
        <Footer />
      </ThemeProvider>
    </div>
  )
}

export default Home

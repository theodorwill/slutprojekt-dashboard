import { useState, useEffect } from 'react'
import useFetch from '../api/useFetch'

const WeatherWidget = () => {
  const kelvinToCelsius = (kelvin) => kelvin - 273.15
  const Key = 'c9159494f8fb3350243e82760de28548'
  const { data } = useFetch(
    `https://api.openweathermap.org/data/2.5/weather?q=stockholm&appid=${Key}`
  )

  return (
    <div className="weather">
      {data && <h1>{data.name}</h1>}
      {data && <p>{parseFloat(kelvinToCelsius(data.main.temp)).toFixed(1) + "°C"}</p>}
      {data && <p>{data.weather[0].main}</p>}
      {data && <p>{data.weather[0].description}</p>}
    </div>
  )
}

export default WeatherWidget

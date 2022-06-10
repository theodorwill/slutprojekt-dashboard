import useFetch from '../api/useFetch'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const WeatherWidget = () => {
  const kelvinToCelsius = (kelvin) => kelvin - 273.15
  const Key = 'c9159494f8fb3350243e82760de28548'
  const { data } = useFetch(
    `https://api.openweathermap.org/data/2.5/weather?q=stockholm&appid=${Key}`
  )

  return (
    <div className="weather">
      <Card variant="outlined">
        {data && (
          <CardHeader
            title={"Weather, " + data.name + ", Sweden"}
            subheader={data.weather[0].main + ' - ' + data.weather[0].description}
          />
        )}
        <CardContent>
          {data && (
            <Typography variant="h5" component="h3" gutterBottom>
              {parseFloat(kelvinToCelsius(data.main.temp)).toFixed(1) + '°C'}
            </Typography>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default WeatherWidget

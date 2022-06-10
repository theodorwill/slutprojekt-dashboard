import { useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const LocalTime = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <Card variant="outlined">
        <CardHeader title="Local time Date/Time"
        subheader={time.toDateString()} />
        <CardContent>
          <Typography variant="h5" component="h3" gutterBottom>{time.toLocaleTimeString()}</Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default LocalTime

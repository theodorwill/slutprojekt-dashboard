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
      <Card>
        <CardHeader title="Local time Date/Time" />
        <CardContent>
          <Typography variant="body1">{time.toDateString()}</Typography>
          <Typography variant="h5">{time.toLocaleTimeString()}</Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default LocalTime

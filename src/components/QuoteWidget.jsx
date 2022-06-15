import useFetch from '../api/useFetch'
import { Card, CardHeader, CardContent, Typography } from '@mui/material/'

const QuoteWidget = () => {
  const { data } = useFetch('https://animechan.vercel.app/api/random')

  return (
    <div>
      <Card variant="outlined">
        {data && (
          <CardHeader
            title="Random Anime Quote"
            subheader={data.character + ' - ' + data.anime}
          />
        )}

        <CardContent>
          {data && (
            <Typography variant="body1" component="p" gutterBottom>
              {data.quote}
            </Typography>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default QuoteWidget

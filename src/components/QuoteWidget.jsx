import useFetch from '../api/useFetch'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const QuoteWidget = () => {
    const { data } = useFetch('https://animechan.vercel.app/api/random')
    console.log(data)

    return (
        <div>
            <Card variant="outlined">
                {data &&(<CardHeader
                title="Random Anime Quote"
                subheader={data.character + ' - ' + data.anime}
                />)}

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
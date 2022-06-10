import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const LocalTime = () => {
    const currentDateTime = Date().toLocaleString()
    return (
        <div>
            <Card>
                <CardHeader title="Local time Date/Time"/>
                <CardContent>
                    <Typography variant="body1">
                        {currentDateTime}
                    </Typography>
                </CardContent>
            </Card>

        </div>
    )
}

export default LocalTime
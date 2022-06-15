import { AppBar, Toolbar, Typography, styled, Grid } from '@mui/material/'

const Footer = () => {
  const Offset = styled('div')(({ theme }) => theme.mixins.toolbar)

  return (
    <div>
      <Offset />
      <AppBar color="primary" postiton="fixed" sx={{ top: 'auto', bottom: 0}}>
        <Grid
        container
        direction="row"
        justifyContent="flex-end"
        >
            <Grid item>
        <Toolbar variant="regular">
          <Typography fontWeight="200" variant="h4">JSU2021</Typography>
        </Toolbar>
        </Grid>
        </Grid>
      </AppBar>
    </div>
  )
}

export default Footer
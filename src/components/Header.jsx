import { AppBar, Toolbar, Typography, styled } from '@mui/material/'

const Header = () => {
  const Offset = styled('div')(({ theme }) => theme.mixins.toolbar)

  return (
    <div>
      <AppBar color="primary" postiton="fixed">
        <Toolbar variant="regular">
          <Typography fontWeight="200" variant="h4">IT-Högskolan</Typography>
        </Toolbar>
      </AppBar>
      <Offset />
    </div>
  )
}

export default Header

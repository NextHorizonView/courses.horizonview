import { Box, Button, CssBaseline, ThemeProvider, Typography, createTheme, responsiveFontSizes } from '@mui/material'
import Navigation from './pages/Navigation.pages'
import TrendingTopics from './components/TrendingTopics.component'
import './App.css'
function App() {
  let theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#34A853',
      },
      secondary: {
        main: '#ffffff',
      },
      accent: {
        main: '#000000',
      },
    },
  })
  theme = responsiveFontSizes(theme)
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navigation />
        <main className='bg-[#212121] md:py-24 py-8 px-4 flex flex-col gap-8 items-center'>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}>
            <Typography gutterBottom={true} variant='h4' align='center' color='secondary'>Tired of same old methods ? Us, too.</Typography>
            <Typography maxWidth='sm' gutterBottom={true} variant='p' align='center' color='secondary'>Learn faster with interactive, session courses and projects — actually built for developers. Powered by HorizonView</Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
            <Button variant='contained' color='primary' >Explore Courses</Button>
            <Button variant='outlined' color='primary' >Join Us For Free</Button>
          </Box>
          <Typography variant='p' align='center' color='secondary'>Join 100+ developers community working with us</Typography>
        </main>
        <TrendingTopics />
      </ThemeProvider>
    </>
  )
}

export default App

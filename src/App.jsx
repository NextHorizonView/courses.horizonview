import { Box, Button, CssBaseline, Typography, createTheme, responsiveFontSizes } from '@mui/material'
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import Navigation from './pages/Navigation.pages'
import TrendingTopics from './components/TrendingTopics.component'
import './App.css'
import { createUserDocumentFromAuth, onAuthStateChangedListener, signInWithGooglePopup } from './utils/firebase/firebase.utils';
import { useDispatch } from 'react-redux';
import { setUser } from './store/user/userSlice';
import { useEffect } from 'react';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      const userData = {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      };
      console.log(userData);
      dispatch(setUser(userData));
    });

    return unsubscribe
  }, [])
  const handleScroll = () => {
    const element = document.getElementById('trending-course');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  }
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
            <Button variant="contained" color="primary" onClick={handleScroll}>
              Explore Courses
            </Button>
            <Button variant='outlined' color='primary' onClick={signInWithGoogle} >Join Us For Free</Button>
          </Box>
          <Typography variant='p' align='center' color='secondary'>Join 100+ developers community working with us</Typography>
        </main>
        <TrendingTopics />
      </ThemeProvider>
    </>
  )
}

export default App

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../assets/logo.svg';
import { useSelector } from 'react-redux';
import { selectUser } from '../store/user/userSlice';
import { signInWithGooglePopup } from '../utils/firebase/firebase.utils';

const pages = [];
const settings = [];

function Navigation() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const user = useSelector(selectUser);
    console.log(user);

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#ffffff' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutter sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box className='flex'>
                        <Box sx={{ display: 'flex', mr: 1 }}>
                            <img src={Logo} alt="Logo" />
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', sm: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.1rem',
                                color: '#000000',
                                textDecoration: 'none',
                            }}
                        >
                            Horizon View
                        </Typography>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        {user ?
                            <IconButton sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src={user.photoURL} />
                            </IconButton>
                            : <Button onClick={signInWithGoogle} >Login</Button>}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
}
export default Navigation;

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
import MenuItem from '@mui/material/MenuItem';
import customAvatar from '../../assets/images/myAvatar.png';
import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";

const pages = ['Home', 'Skills', 'About', 'Projects', 'Contact'];



// const pages = {{ '<HashLink to="/">Home</HashLink>', '<HashLink to="/">Home</HashLink>' }}




const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    };

    return (
    <AppBar position="static" sx={{ marginBottom: 2, backgroundColor: '#E5E8DD' }}>
        <Container maxWidth="xl">
        <Toolbar disableGutters>
            <Typography
            fontFamily="meno-banner"
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, color: 'black', display: { xs: 'none', md: 'flex' } }}
            >
            TM
            </Typography>

            <Box sx={{ flexGrow: 1, color: 'black', display: { xs: 'flex', md: 'none' } }}>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                display: { xs: 'block', md: 'none' },
                }}
            >
                <MenuItem onClick={handleCloseNavMenu}><HashLink to="/" style={{ color: 'black', textDecoration: 'inherit' }}>Home</HashLink></MenuItem>
                <MenuItem onClick={handleCloseNavMenu}><HashLink to="/#skill" style={{ color: 'black', textDecoration: 'inherit' }}>Skill</HashLink></MenuItem>
                <MenuItem onClick={handleCloseNavMenu}><HashLink to="/#about" style={{ color: 'black', textDecoration: 'inherit' }}>About</HashLink></MenuItem>
                <MenuItem onClick={handleCloseNavMenu}><HashLink to="/#project" style={{ color: 'black', textDecoration: 'inherit' }}>Project</HashLink></MenuItem>
                <MenuItem onClick={handleCloseNavMenu}><HashLink to="/#contact" style={{ color: 'black', textDecoration: 'inherit' }}>Contact</HashLink></MenuItem>
            </Menu>
            </Box>
            <Typography
            color="black"
            fontFamily="meno-banner"
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
            Takuya Matsumoto
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <HashLink to="/">
                    <Button
                    key={1}
                    onClick={handleCloseNavMenu}
                    sx={{ margin: 5, fontFamily: 'meno-banner', fontWeight: '600px', fontSize: '16px', my: 2, color: 'black', display: 'block' }}
                    >Home</Button>
                </HashLink>
                <HashLink to="/#skill">
                    <Button
                    key={2}
                    onClick={handleCloseNavMenu}
                    sx={{ margin: 5, fontFamily: 'meno-banner', fontWeight: '600px', fontSize: '16px', my: 2, color: 'black', display: 'block' }}
                    >Skills</Button>
                </HashLink>
                <HashLink smooth to='/#about'>
                    <Button
                    key={3}
                    // onClick={handleCloseNavMenu}
                    sx={{ margin: 5, fontFamily: 'meno-banner', fontWeight: '600px', fontSize: '16px', my: 2, color: 'black', display: 'block' }}
                    >About</Button>
                </HashLink>
                <HashLink to="/#project">
                    <Button
                    key={4}
                    onClick={handleCloseNavMenu}
                    sx={{ margin: 5, fontFamily: 'meno-banner', fontWeight: '600px', fontSize: '16px', my: 2, color: 'black', display: 'block' }}
                    >Projects</Button>
                </HashLink>
                <HashLink to="/#contact">
                    <Button
                    key={5}
                    onClick={handleCloseNavMenu}
                    sx={{ margin: 5, fontFamily: 'meno-banner', fontWeight: '600px', fontSize: '16px', my: 2, color: 'black', display: 'block' }}
                    >Contact</Button>
                </HashLink>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
                <Avatar alt="Takuya Matsumoto" src={customAvatar} />
            </Box>
        </Toolbar>
        </Container>
    </AppBar>
    );
};
export default ResponsiveAppBar;
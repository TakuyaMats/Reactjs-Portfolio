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

const pages = ['Home', 'About', 'Projects', 'Contact'];

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
                {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                </MenuItem>
                ))}
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
            LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
                <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ margin: 5, fontFamily: 'meno-banner', fontWeight: '600px', fontSize: '16px', my: 2, color: 'black', display: 'block' }}
                >
                {page}
                </Button>
            ))}
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
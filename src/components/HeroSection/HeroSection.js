import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import heroAvatar from '../../assets/images/heroAvatar.png';
import useStyles from './useStyles';

const HeroSection = (props) => {
    const classes = useStyles(props);

    return (
        <Box sx={{ flexGrow: 1, backgroundColor: '#E5E8DD'}} id="/">
            <Grid container spacing={2} columns={16}>
                <Grid item xs={8}>
                    <Container>
                        <h1 className={classes.h1}>Hi, My Name Is Takuya Matsumoto</h1>
                        <p className={classes.p} style={{  display: 'flex', justifyContent: 'flex-end', color: 'grey' }}>I love all things music, tech, and design!</p>
                    </Container>
                </Grid>
                <Grid item xs={8}>
                    <Container id="hero-container">
                        <img id="hero-img" src={heroAvatar} alt="Hero Avatar" style={{ height: '100%', width: '100%', align: "center"}}/>
                    </Container>
                </Grid>
            </Grid>
        </Box>
    );
};

export default HeroSection;
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import AboutMeImage from '../../assets/images/AboutMe.png';
import Button from '@mui/material/Button';
import useStyles from './useStyles';

const AboutSection = (props) => {
    const classes = useStyles(props);

    return (
        <Box className={classes.margin} id="about">
            <Grid container spacing={2} columns={16}>
                <Grid item xs={8}>
                    <Container id="about-container">
                        <img src={AboutMeImage} alt="About Illustration" className={classes.aboutMeImage}/>
                    </Container>
                </Grid>
                <Grid item xs={8}>
                    <Container>
                        <h3 className={classes.h3}>About Me</h3>
                        <hr className={classes.hr}></hr>
                        <p className={classes.p}>Previously a digital technician with experience in the photography industry, with skills in photo-shoots, management, and adobe photoshop.
                        I love music and always love sharing new music with my friends.</p>
                    </Container>
                    <Container className={classes.image}>
                        <h4 className={classes.h4}>My Photography Site!</h4>
                        <Button className={classes.btn} variant="contained"><a className={classes.a} href="https://takuyagallery.com/" target="_blank" rel="noreferrer">Click Me!</a></Button>
                    </Container>
                </Grid>
            </Grid>
        </Box>
    )
};

export default AboutSection;
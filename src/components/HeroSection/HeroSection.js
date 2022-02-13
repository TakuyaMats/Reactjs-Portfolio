import styled from 'styled-components';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import heroAvatar from '../../assets/images/heroAvatar.png';

const HeroSectionStyle = styled.div`
    background-color: #E5E8DD

`;

const HeroSection = () => {
    return (
        <HeroSectionStyle>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} columns={16}>
                    <Grid item xs={8}>
                        <Container>
                            <h1 style={{ margin: 24 }}>Hi, My Name Is Takuya Matsumoto</h1>
                            <p style={{  display: 'flex', justifyContent: 'flex-end', fontSize: 18, color: 'grey' }}>I love all things music, tech, and design!</p>
                        </Container>
                    </Grid>
                    <Grid item xs={8}>
                        <Container id="hero-container">
                            <img id="hero-img" src={heroAvatar} alt="Hero Avatar" style={{ height: '100%', width: '100%', align: "center"}}/>
                        </Container>
                    </Grid>
                </Grid>
            </Box>
        </HeroSectionStyle>
    );
};

export default HeroSection;
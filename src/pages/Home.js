import React from 'react';
import styled from 'styled-components';
// import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// import MenuAppBar from '../components/Navbar/Navbar';
import HeroSection from '../components/HeroSection/HeroSection';
import ProjectSection from '../components/ProjectSection/ProjectSection';
import AboutSection from '../components/AboutSection/AboutSection';
import SkillSection from '../components/SkillSection/SkillSection';
import Footer from '../components/Footer/Footer';
import { HashLink } from "react-router-hash-link";

const HomeStyle = styled.div`
        /* .hero {
        height: 100vh;
        min-height: 1000px;
        width: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    } */
`

function Home() {
    return(
        <HomeStyle>
            <HeroSection/>
            <SkillSection/>
            <AboutSection/>
            <ProjectSection/>
            <Footer/>
        </HomeStyle>
    )
}

export default Home;
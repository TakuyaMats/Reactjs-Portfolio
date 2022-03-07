import React from 'react';
import MenuAppBar from '../components/Navbar/Navbar';
import HeroSection from '../components/HeroSection/HeroSection';
import ProjectSection from '../components/ProjectSection/ProjectSection';
import AboutSection from '../components/AboutSection/AboutSection';
import SkillSection from '../components/SkillSection/SkillSection';
import Footer from '../components/Footer/Footer';


function Home() {
    return(
        <>
            <MenuAppBar />
            <HeroSection/>
            <SkillSection/>
            <AboutSection/>
            <ProjectSection/>
            <Footer/>
        </>
    )
}

export default Home;
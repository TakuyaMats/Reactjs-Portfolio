import React from 'react';
import styled from 'styled-components';
import MenuAppBar from '../components/Navbar/Navbar';
import HeroSection from '../components/HeroSection/HeroSection';
import ProjectSection from '../components/ProjectSection/ProjectSection';

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
            {/* <div className="hero"> */}
                <MenuAppBar />
                <HeroSection />
                <ProjectSection />
            {/* </div> */}
        </HomeStyle>
    )
}

export default Home;
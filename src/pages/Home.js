import React from 'react';
import styled from 'styled-components';
import MenuAppBar from '../components/Navbar/Navbar';

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
            {/* </div> */}
        </HomeStyle>
    )
}

export default Home;
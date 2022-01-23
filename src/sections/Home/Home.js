import React from 'react';
import styled from 'styled-components';
import Profile from '../Profile/Profile';
import ParticlesBg from 'particles-bg';

export default function Home() {
    return (
        <HomeStyled>
            <ParticlesBg num={250} type="cobweb" />
            <Profile />
        </HomeStyled>
    )
}

const HomeStyled = styled.header`
    width: 100%;
    height: 100vh;
    //position: absolute;
`;
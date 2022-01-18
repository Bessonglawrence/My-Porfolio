import React from 'react';
import styled from 'styled-components';
import Profile from '../Profile/Profile';

export default function Home() {
    return (
        <HomeStyled>
            <Profile />
        </HomeStyled>
    )
}

const HomeStyled = styled.header`
    width: 100%;
    height: 100vh;
    //position: absolute;
`;
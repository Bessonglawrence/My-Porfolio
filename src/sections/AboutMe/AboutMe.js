import React from 'react'
import styled from 'styled-components'
import Title from '../../components/Title';
import { MainLayout } from '../../styles/Layout';

export default function AboutMe() {
    return (
        <MainLayout>
            <AboutStyled>
                <Title title="About Me" span="About Me"/>
            </AboutStyled>
        </MainLayout>
    )
}

const AboutStyled = styled.section`

`;
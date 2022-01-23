import React from 'react'
import styled from 'styled-components'
import ImageSection from '../../components/ImageSection';
import ReviewSection from '../../components/ReviewSection';
import ServiceSection from '../../components/ServiceSection';
import Title from '../../components/Title';
import { MainLayout } from '../../styles/Layout';

export default function AboutMe() {
    return (
        <MainLayout>
            <AboutStyled>
                <Title title="About Me" span="About Me"/>
                <ImageSection />
                <ServiceSection />
                <ReviewSection />
            </AboutStyled>
        </MainLayout>
    )
}

const AboutStyled = styled.section`

`;
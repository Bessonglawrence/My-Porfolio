import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layout';
import Title from './Title';
import ServiceCard from './ServiceCard';
import mobile from '../res/Images/mobile.png';
import design from '../res/Images/design.png';

function ServiceSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Services'} span={'Services'} />
                <div className='services'>
                    <ServiceCard 
                        image={design} 
                        title={'Web Development'}
                        paragraph={'I am proficient in React, Wordpress and Wix web technologies and have completed quiet a number of projects with them.'}
                    />

                        <ServiceCard 
                            image={design} 
                            title={'Graphic Designing'}
                            paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'}
                        />

                    <ServiceCard 
                        image={mobile} 
                        title={'Mobile Development'}
                        paragraph={'Expert level mobile app developer, have been working with it since 2017 and have complete more than 12 projects with it.'}
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        display: flex;
        justify-content: space-between;
        margin-top: 5rem;
    }
`;

export default ServiceSection

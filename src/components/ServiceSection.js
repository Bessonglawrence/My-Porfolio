import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layout';
import Title from './Title';
import ServiceCard from './ServiceCard';
import web from '../res/Images/web.svg';
import mobile from '../res/Images/mobile.svg';
import laptop from '../res/Images/laptop.svg';

function ServiceSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Services'} span={'Services'} />
                <div className='services'>
                    <ServiceCard 
                        image={web} 
                        title={'Web Development'}
                        paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'}
                    />

                        <ServiceCard 
                            image={web} 
                            title={'Graphic Designing'}
                            paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'}
                        />

                    <ServiceCard 
                        image={mobile} 
                        title={'Mobile Development'}
                        paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'}
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

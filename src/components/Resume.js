import React from 'react';
import styled from 'styled-components';
import { MainLayout,InnerLayout } from '../styles/Layout';
import Title from './Title';
import SmallTitle from './SmallTitle';
import ResumeItem from './ResumeItem';
import { BusinessCenter, School } from "@material-ui/icons"


function Resume() {

    const briefcase = <BusinessCenter />
    const school = <School />

  return (
        <ResumeStyled>
            <Title title={'Resumé'} span={'Resumé'} />
            <InnerLayout>
                <div className='small-title'>
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className='resume-content'>
                    <ResumeItem 
                        year={'2017-2021'}
                        mainTitle={'Digital Renter'}
                        title={'Lead Developer'}
                        // subTitle={'Digital Renter Mobile App'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                    />
                    <ResumeItem 
                        year={'2018-2021'}
                        mainTitle={'Another Eye'}
                        title={'Engineering Lead'}
                        // subTitle={'Digital Renter Mobile App'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                    />
                    <ResumeItem 
                        year={'2021-2021'}
                        mainTitle={'Bohikor'}
                        title={'Software Developer'}
                        // subTitle={'Digital Renter Mobile App'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                    />
                </div>

                <div className='small-title'>
                    <SmallTitle icon={school} title={'Education'} />
                </div>

                <div className='resume-content'>
                    <ResumeItem 
                        year={'2017-2021'}
                        mainTitle={'Digital Renter'}
                        title={'Lead Developer'}
                        // subTitle={'Digital Renter Mobile App'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                    />
                    <ResumeItem 
                        year={'2018-2021'}
                        mainTitle={'Another Eye'}
                        title={'Engineering Lead'}
                        subTitle={'Digital Renter Mobile App'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                    />
                    <ResumeItem 
                        year={'2021-2021'}
                        mainTitle={'Bohikor'}
                        title={'Software Developer'}
                        // subTitle={'Digital Renter Mobile App'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>
    );
}

const ResumeStyled = styled.div`
    .small-title{
        padding-bottom: 1rem;
        //padding-top: 2rem;
    }
    .resume-content{
        border-left: 2px solid var(--border-color);
        margin-bottom: 2rem;
    }
`;

export default Resume;

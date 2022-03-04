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
                        subTitle={'Digital Renter Mobile App'}
                        description={'Supervised the Engineering and Development of the mobile application. Also acted as project manager. Worked as programmer to development some modules and features to the application.'}
                    />
                    <ResumeItem 
                        year={'2018-2021'}
                        mainTitle={'Another Eye'}
                        title={'Engineering Lead'}
                        subTitle={'Another Mobile App'}
                        description={'Supervised the Engineering and Development of the mobile application. Also acted as project manager. Worked as programmer to development some modules and features to the application.'}
                    />
                    <ResumeItem 
                        year={'2021-2021'}
                        mainTitle={'Adipster Tech'}
                        title={'Software Developer'}
                        subTitle={'Code Reviews'}
                        description={'Mainly codes reviews for junior developers and momentary fixes in the main platform when required. Code reviews ranged from large to minor projects. Also help in some platform engineering.'}
                    />
                    <ResumeItem 
                        year={'2021-2021'}
                        mainTitle={'Bohikor'}
                        title={'Software Developer'}
                        // subTitle={'Digital Renter Mobile App'}
                        description={'Supervised the Engineering and Development of the mobile application. Also acted as project manager. Worked as programmer to development some modules and features to the application.'}
                    />
                </div>

                <div className='small-title'>
                    <SmallTitle icon={school} title={'Education'} />
                </div>

                <div className='resume-content'>
                    <ResumeItem 
                        year={'2014-2017'}
                        mainTitle={'University of Douala'}
                        title={'Bachelors Degree'}
                        description={'Completed a degree program in Computer Science with Honours. Engaged in extracuricular activities like becoming a member of the programmers club. Joined the debate club.'}
                    />
                    <ResumeItem 
                        year={'2012-2014'}
                        mainTitle={'GBHS Tiko'}
                        title={'GCE Advanced Levels'}
                        description={'Completed a degree program in Computer Science with Honours. Engaged in extracuricular activities like becoming a member of the programmers club. Joined the debate club.'}
                    />
                    <ResumeItem 
                        year={'2005-2012'}
                        mainTitle={'GBHS Tiko'}
                        title={'GCE Ordinary Levels'}
                        description={'Finished secondary school with a combined average of 17.43 and 11 papers in the GCE ordinary levels. Was a member of the school athlete team participating the FENASCO 100 meters race.'}
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>
    );
}

const ResumeStyled = styled.div`
    .small-title{
        padding-bottom: 1rem;
    }
    .resume-content{
        border-left: 2px solid var(--border-color);
        margin-bottom: 2rem;
    }
`;

export default Resume;

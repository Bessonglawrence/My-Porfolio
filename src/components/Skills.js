import React from 'react';
import styled from 'styled-components';
import {MainLayout, InnerLayout} from '../styles/Layout';
import ProgressBar from './ProgressBar';
import Title from './Title';

function Skills() {
  return (
    <SkillsStyled>
        <Title title={'CORE SKILLS'} span={'CORE SKILLS'} />
        <InnerLayout>
            <div className='skills'>
                <ProgressBar 
                    title={'HTML5'}
                    width={'70%'}
                    text={'70%'}
                />
                <ProgressBar 
                    title={'CSS3'}
                    width={'80%'}
                    text={'80%'}
                />
                <ProgressBar 
                    title={'JAVASCRIPT'}
                    width={'80%'}
                    text={'80%'}
                />
                <ProgressBar 
                    title={'REACT NATIVE'}
                    width={'85%'}
                    text={'85%'}
                />
                <ProgressBar 
                    title={'REACT JS'}
                    width={'70%'}
                    text={'70%'}
                />
                <ProgressBar 
                    title={'NODE JS'}
                    width={'70%'}
                    text={'70%'}
                />
                <ProgressBar 
                    title={'SQL'}
                    width={'65%'}
                    text={'65%'}
                />
            </div>
        </InnerLayout>
    </SkillsStyled>
  );
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: .7rem;
        grid-column-gap: 2rem;
    }
`;

export default Skills;

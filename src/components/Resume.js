import React from 'react';
import styled from 'styled-components';
import { MainLayout,InnerLayout } from '../styles/Layout';
import Title from './Title';

function Resume() {
  return (
        <ResumeStyled>
            <Title title={'Resumé'} span={'Resumé'} />
        </ResumeStyled>
    );
}

const ResumeStyled = styled.div`

`;

export default Resume;

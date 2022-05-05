import React from 'react';
import styled from 'styled-components';
import Resume from '../../components/Resume';
import Skills from '../../components/Skills';
import { MainLayout } from '../../styles/Layout';

export default function ResumePage() {
    return (
        <MainLayout>
            <ResumePageStyled>
                <Skills />
                <Resume />
            </ResumePageStyled>
        </MainLayout>
    )
}

const ResumePageStyled = styled.div`
`;
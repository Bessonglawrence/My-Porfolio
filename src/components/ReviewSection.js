import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layout';
import Title from './Title';

function ReviewSection() {
  return (
      <InnerLayout>
            <ReviewStyled>
                <Title title={'Reviews'} span={'Reviews'}/>
            </ReviewStyled>
      </InnerLayout>
  );
}

const ReviewStyled = styled.section`

`;

export default ReviewSection;

import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layout';
import ReviewItem from './ReviewItem';
import Title from './Title';

function ReviewSection() {
  return (
      <ReviewStyled>
          <Title title={'Reviews'} span={'Reviews'}/>
          <InnerLayout>
            
              <div className='reviews'>
                  <ReviewItem
                    text={'He did a wonderful job with the Manyu Solidarity Group Website, within a short time span too.'} 
                  />
                  <ReviewItem
                    text={'His designs are top notche. Helped with both the flyers and the logo for my association. Well done mate.'} 
                  />
              </div>
           
          </InnerLayout>
      </ReviewStyled>
  );
}

const ReviewStyled = styled.section`
  .reviews{
    display: flex;
  }
`;

export default ReviewSection;

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
                    text={'Lorem ipsum dolor sit amet. Eos provident doloremque eum cupiditate.'} 
                  />
                  <ReviewItem
                    text={'Lorem ipsum dolor sit amet. Eos provident doloremque eum cupiditate.'} 
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

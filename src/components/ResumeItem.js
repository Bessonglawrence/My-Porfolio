import React from 'react';
import styled from 'styled-components';

function ResumeItem({year, mainTitle, title, subTitle, description}) {
  return (
      <ResumeItemStyled>
          <div className='left-content'>
              <p>{year}</p>
          </div>
          <div className='right-content'>
              <h4>{mainTitle}</h4>
              <h5>{title}</h5>
              <h6>{subTitle}</h6>
              <p>{description}</p>
          </div>
      </ResumeItemStyled>
  );
}

const ResumeItemStyled = styled.div`
    display: flex;
    &:not(:last-child){
        padding-bottom: 2.5rem;
    }
    .left-content{
        width: 50%;
        padding-left: 20px;
        position: relative;
        &::before{
            content: "";
            position: absolute;
            left: -11px;
            top: 5px;
            height: 15px;
            width: 15px;
            border-radius: 50%;
            border: 2px solid var(--border-color);
            background-color: var(--background-dark-color);
        }
        p{
            font-size: .9rem;
            display: inline-block;
        }
    }
    .right-content{
        margin-left: 2rem;
        position: relative;
        &::before{
            content:"";
            position: absolute;
            left: -2.3rem;
            top: 15px;
            height: 2px;
            width: 1.7rem;
            background-color: var(--border-color) ;
        }
        h4{
            color: var(--primary-color);
            font-size: 1.4rem;
            padding-bottom: .4rem;
        }
        h5{
            font-size: 1rem;
            color: var(--white-color);
            padding-bottom: .4rem;
            font-style: italic;
        }
        p{
            font-size: .9rem;
        }

    }
`;

export default ResumeItem;

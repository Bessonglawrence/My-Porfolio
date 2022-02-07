import React from 'react';
import styled from 'styled-components';

function ProgressBar({title, width, text}) {
  return (
    <ProgressBarStyled>
        <h6>{title}</h6>
        <div className='progress-bar'>
            <p>{text}</p>
            <div className='progress'>
                <span style={{width: width}}></span>
            </div>
        </div>
    </ProgressBarStyled>
  );
}

const ProgressBarStyled = styled.div`
    h6{
        color: var(--white-color);
        font-size: 1rem;
        font-style: italic;
    }
    .progress-bar{
        display: flex;
        align-items: center;
        p{
            padding-right: 1rem;
            font-size: .9rem;
        }
        .progress{
            position: relative;
            width: 100%;
            height: .2rem;
            background-color: var(--border-color);
            span{
                position: absolute;
                left: 0;
                bottom: 0;
                height: 100%;
                background-color: var(--primary-color);
            }
        }
    }
`;

export default ProgressBar;

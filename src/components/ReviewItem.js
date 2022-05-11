import React from 'react';
import styled from 'styled-components';

function ReviewItem({text}) {
  return (
        <ReviewItemStyled>
            <p>{text}</p>
        </ReviewItemStyled>
    );
}

const ReviewItemStyled = styled.div`
    padding: 1.5rem 1rem;
    border-left: 6px solid var(--border-color);
    background-color: var(--background-grey-color);
    position: relative;
    &:not(:first-child){
        margin-left: 1rem;
    }
    &::after{
        content: "";
        position: absolute;
        left: 1rem;
        border-width: .8rem;
        border-style: solid;
        border-color: var(--background-grey-color) transparent transparent var(--background-grey-color);
        top: 100%;
    }
    p{
        font-size: 17px;
    }
`;

export default ReviewItem;

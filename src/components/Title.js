import React from 'react'
import styled from 'styled-components'

export default function Title({title, span}) {
    return (
        <TitleStyled>
            <h2>{title}<span>{span}</span></h2>
        </TitleStyled>
    )
}

const TitleStyled = styled.div`
    position: relative;
    h2{
        color: var(--white-color);
        font-size: 3.8rem;
        font-weight: 550;
        text-transform: uppercase;
        position: relative;
        &::before{
            content: "";
            position: absolute;
            bottom: 0;
            width: 12rem;
            height: .2rem;
            background-color: var(--background-light-color-2);
        }
        span{
            font-weight: 700;
            color: rgba(25,29,43,.44); 
            font-size: 5rem;
            position: absolute;
            left: 0;
            top: 20%;
            z-index: -1;
        }
    }
`;

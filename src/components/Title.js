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
        font-size: 2.8rem;
        font-weight: 550;
        text-transform: uppercase;
        position: relative;
        padding-bottom: 1;
        &::before{
            content: "";
            position: absolute;
            bottom: 0;
            width: 10rem;
            height: .2rem;
            background-color: var(--background-light-color-2);
            border-radius: 15px;
            left: 0;
        }
        &::after{
            content: "";
            position: absolute;
            bottom: 0;
            width: 5rem;
            height: .2rem;
            background-color: var(--primary-color);
            border-radius: 15px;
            left: 0;
        }
        span{
            font-weight: 700;
            color: rgba(25,29,43,.44); 
            font-size: 4rem;
            position: absolute;
            left: 0;
            top: 25%;
            z-index: -1;
        }
    }
`;

import React from 'react';
import styled from 'styled-components';

function PrimaryButton({title, onclick}) {
    return (
        <PrimaryButtonStyled onClick={onclick}>
            {title}
        </PrimaryButtonStyled>
    )
}

const PrimaryButtonStyled = styled.a`
    background-color: var(--primary-color);
    padding: .5rem 2rem;
    color: white;
    cursor: pointer;
    display: inline-block;
    font-size: inherit;
    text-transform: uppercase;
    position: relative;
    transition: all .4s ease-in-out;
    border-radius: .3rem;
    &::after{
        content: "";
        position: absolute;
        width: 0;
        height: .2rem;
        transition: all .4s ease-in-out;
        left: 0;
        bottom: 0;
        align-self: center;
        opacity: .7;
    }
    &:hover::after{
        width: 100%;
        background-color: var(--white-color);
        border-radius: 2rem;
    }
`;

export default PrimaryButton

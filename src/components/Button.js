import React from 'react';
import styled from 'styled-components';

function Button({filter, button}) {
  return (
    <ButtonsStyled>
        {
          button.map((but, i) =>{
            return <ButtonStyled key={i} onClick={() => filter(but)}> {but} </ButtonStyled>
          })
        }
    </ButtonsStyled>   
  )
}

const ButtonStyled = styled.button`
  outline: none;
  border: none;
  background-color: var(--primary-color);
  padding: .3rem 1.5rem;
  font-size: inherit;
  font-weight: 600;
  border-radius: .2rem;
  color: var(--white-color);
  cursor: pointer;
  transition: all .4s ease-in-out;
  &:hover{
    background-color: var(--primary-color);
    opacity: .4;
  }
  &:active, &:focus{
      background-color: var(--background-grey-color);
  }
  &:not(:last-child){
    margin-right: .6rem;
  }
`;
const ButtonsStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 70%;
  margin: 2.4rem auto;
`;


export default Button;
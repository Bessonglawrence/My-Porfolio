import React from 'react';
import styled from 'styled-components';

function SmallTitle({icon, title}) {
  return (
   <SmallTitleStyled>
       <p>{icon}</p>
       <h3>{title}</h3>
   </SmallTitleStyled>
  );
}

const SmallTitleStyled = styled.div`
    display: flex;
    align-items: center;
    p{
        padding-right: 1rem;
        color: var(--primary-color);
        svg{
            font-size: 2rem;
        }
    }
    h3{
        font-style: italic;
        color: var(--white-color);
        font-size: 1.4rem;
    }
`;

export default SmallTitle;

import React from 'react';
import styled from 'styled-components';

function ContactItem({icon, title, con1, con2}) {
  return (
        <ContactItemStyled>
            <div className='left-content'>
                {icon}
            </div>
            <div className='right-content'>
                <h6> {title} </h6>
                <p> {con1} </p>
                <p> {con2} </p>
            </div>
        </ContactItemStyled>
    );
}

const ContactItemStyled = styled.div`
    padding: 1rem 1.5rem;
    background-color: var(--background-grey-color);
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    .left-content{
        padding-right: 1.4rem ;
        align-items: center;
        justify-content: center;
        display: flex;
        svg{
            font-size: 2.3rem;
        }
    }
`;

export default ContactItem;

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
    padding: 1.5rem 2rem;
    background-color: var(--background-grey-color);
    display: flex;
    align-items: center;
    .left-content{
        padding: .5rem;
        border: 1px solid var(--border-color);
        border-radius: 80px;
        justify-content: center;
        svg{
            font-size: 2.3rem;
        }
    }
`;

export default ContactItem;

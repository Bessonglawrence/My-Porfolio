import React from 'react';
import styled from 'styled-components';

function ServiceCard({image, title, paragraph}) {
    return (
        <ServiceCardStyled>
            <div className='container'>
                <img src={image} alt="" />
                <h4>{title}</h4>
                <p>{paragraph}</p>
            </div>
        </ServiceCardStyled>
    )
}

const ServiceCardStyled = styled.div`
    background-color: var(--background-grey-color) ;
    border-radius: .3rem;
    margin-right: 8px;
    border-left: 1px solid var(--border-color);
    border-right: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    border-top: 8px solid var(--border-color);
    transition: all .4s ease-in-out;
    margin-bottom: -4rem;
    &:hover{
        border-top: 8px solid var(--primary-color);
        transform: translateY(4px);
    }
    .container{
        padding: 1.2rem;
        align-items: center;
        h4{
            color: var(--white-color);
            font-size: 1.2rem;
            padding: .5rem 0;
            position: relative;
            &::after{
                content: "";
                width: 4rem;
                background-color: var(--border-color);
                height: 4px;
                position: absolute;
                left: 0;
                bottom: 0;
                border-radius: 2rem;
            }
        }
        p{
            margin-top: 1rem;
            font-size: 18px;
        }
        img{
            width: 90%;
            margin-left: 10px;
        }
    }
`;

export default ServiceCard;

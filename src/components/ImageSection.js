import React from 'react'
import picture from '../res/Images/picture.jpeg';
import styled from 'styled-components';
import PrimaButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className='left-content'>
                <img src={picture} alt='resume image' />
            </div>
            <div className='right-content'>
                <h4>I am <span>Orock Lawrence</span></h4>
                <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <div className='about-info'>
                    <div className='info-title'>
                        <p>Full Name</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Location</p>
                        <p>Services</p>
                    </div>
                    <div className='info'>
                        <p>:  Orock lawrence</p>
                        <p>:  Cameroonian</p>
                        <p>:  French, English</p>
                        <p>:  Wales, United Kingdom</p>
                        <p>:  Web and Mobile Development</p>
                    </div>
                </div>
                <PrimaButton title={'Download CV'} />
            </div>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div`
    display: flex;
    margin-top: 4rem;
    .left-content{
        width: 100%;
        height: 40vh;
        img{
            width: 90%;
            margin-top: .5rem;
            border-radius: .3rem;
        }
    }
    .right-content{
        h4{
            font-size: 1.5rem;
            color: var(--white-color);
            font-style: italic;
            span{
                font-size: 1.5rem;
                color: var(--primary-color);
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            .info-title{
                margin-right: 1rem;
                padding: .3rem 0;
                p{
                    font-weight: 600;
                }
            }
            .info{
                padding: .3rem 0;
                padding-left: .5rem;
            }
            p{
                padding: .3rem 0;
            }
        }
    }
`;

export default ImageSection;

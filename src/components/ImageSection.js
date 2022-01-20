import React from 'react'
import resumePicture from '../res/Images/resumePicture.jpeg';
import styled from 'styled-components';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className='left-content'>
                <img src={resumePicture} alt='resume image' />
            </div>
            <div className='right-content'>
                <h4>I am <span>OROCK LAWRENCE</span></h4>
                <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <div className='about-info'>
                    <div className='info-title'>
                        <p>Full Name</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Location</p>
                        <p>services</p>
                    </div>
                    <div className='info'>
                        <p>: OROCK LAWRENCE</p>
                        <p>: CAMERIANIAN</p>
                        <p>: FRENCH, ENGLISH</p>
                        <p>: ABERYSTWYTH, UNITED KINGDOM</p>
                        <p>: WEB AND MOBILE DEVELOPMENT</p>
                    </div>
                </div>
            </div>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div`
    display: flex;
    margin-top: 4rem;
    .left-content{
        width: 100%;
        img{
            width: 90%;
            margin-top: .5rem;
        }
    }
    .right-content{
        h4{
            font-size: 2rem;
            color: var(--white-color);
            font-style: italic;
            span{
                font-size: 2rem;
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
            }
            .info{
                padding: .3rem 0;
                padding-left: .5rem;
            }
        }
    }
`;

export default ImageSection;

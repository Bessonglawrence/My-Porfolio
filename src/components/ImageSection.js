import React from 'react'
import picture from '../res/Images/picture.jpeg';
import styled from 'styled-components';
import PrimaButton from './PrimaryButton';
import fileSaver from 'file-saver';


// const saveFile = () => {
//     fileSaver.saveAs(
//       process.env.REACT_APP_CLIENT_URL + "resume.pdf",
//       "Lawrence's_Resume.pdf"
//     );
// }

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className='left-content'>
                <img src={picture} alt='resume image' />
            </div>
            <div className='right-content'>
                <h4>I am <span>Orock Lawrence</span></h4>
                <p className='paragraph'>I am a software developer with over 5 years of hands on experience with live projects in React and React Native. </p>
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
                        <p>:  Web & Mobile Development</p>
                    </div>
                </div>
               
                <button className='button'>
                    <a href="resume.pdf" download>
                        Download CV
                    </a>
                </button>
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
            font-size: 24px;
            font-style: italic;
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
        button{
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
            margin-top: 1.5rem;
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
        }
}
`;

export default ImageSection;

import React from 'react';
import styled from 'styled-components';
import Title from '../../components/Title';
import { MainLayout, InnerLayout } from '../../styles/Layout';
import Button from '../../components/PrimaryButton';
import { Phone,Email,LocationOn,} from "@material-ui/icons"
import ContactItem from '../../components/ContactItem';

export default function Contact() {

    const email = <Email />
    const phone = <Phone />
    const location = <LocationOn />

    return (
        <MainLayout>
            <Title title={'Contact'} span={'Contact'}/>
            <ContactStyled>
                <InnerLayout className='contact-section'>
                        <div className='left-content'>
                            <div className='contact-title'>
                                <h4>Get In Touch</h4>
                            </div>
                            <form className='form'>
                                <div className='form-field'>
                                    <label htmlFor='name'>Enter your Name*</label>
                                    <input type="text" id="name" required/>
                                </div>
                                <div className='form-field'>
                                    <label htmlFor='email'>Enter your Email*</label>
                                    <input type="email" id="email" />
                                </div>
                                <div className='form-field'>
                                    <label htmlFor='subject'>Enter your Subject*</label>
                                    <input type="text" id="subject" />
                                </div>
                                <div className='form-field'>
                                    <label htmlFor='textarea'>Enter your Message*</label>
                                    <textarea name="textarea" id="textarea" cols="30" rows="10" />
                                </div>
                                <div className='form-field'>
                                    <Button 
                                        title={'Send Email'}
                                        onclick={() => alert("Button has been pressed")}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className='right-content'>
                            <ContactItem icon={phone} title={'Phone'} con1={'+44 7496 247314'} con2={'+44 7387 360413'} />
                            <ContactItem icon={email} title={'Email'} con1={'orockbessonglawrence@gmail.com'} con2={'lbo3@aber.ac.uk'} />
                            <ContactItem icon={location} title={'Location'} con1={'Aberystwyth, Wales'} con2={'United Kingdom'} />
                        </div>
                </InnerLayout>
            </ContactStyled>
        </MainLayout>
    )
}

const ContactStyled = styled.div`
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 1rem;
        .right-content{
            display: flex;
            flex-direction: column;
        }
        .contact-title{
            h4{
                color: var(--white-color);
                font-size: 2rem;
                font-style: italic;
            }
        }
        .form{
            width: 100%;
            .form-field{
                margin-top: 1.5rem;
                position: relative;
                width: 100%;
                label{
                    position: absolute;
                    left: 20px;
                    top: -13px;
                    display: inline-block;
                    background-color: var(--background-dark-color);

                }
                input{
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    padding: 0 15px;
                    height: 50px;
                    width: 100%;
                    caret-color: white;
                    color: inherit;
                }
                textarea{
                    background: transparent;
                    caret-color: white;
                    padding: .8rem 1rem;
                    border: 1px solid var(--border-color);
                    color: inherit;
                    outline: none;
                }
            }
        }
    }
`;

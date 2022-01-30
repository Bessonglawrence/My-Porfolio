import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import avatar from './../res/Images/avatar.jpg';
import { Facebook,LinkedIn, Instagram,GitHub} from "@material-ui/icons";

function Navigation(){


    return(
        <NavigationStyled>
            <div className='avatar'>
                <img src={avatar} alt="" />
            </div>
            <ul className='nav-items'>
                <li className='nav-item'>
                    <NavLink to="/" className='active-class' > Home </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to="/about" className='active-class' > About </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to="/portfolio" className='active-class' > Portfolio </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to="/resume" className='active-class'> Resumé </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to="/contact" className='active-class'> Contact </NavLink>
                </li>
            </ul>
            <div className="icons">
                <a href="https://www.facebook.com/orock.bessongayim" className="icon i-facebook"> 
                  <Facebook />
                </a>
                <a href="https://www.linkedin.com/in/orock-lawrence-01884a179/" className="icon i-github">
                  <LinkedIn />
                </a>
                <a href="https://www.instagram.com/?hl=en" className="icon i-linkedin">
                  <Instagram />
                </a>
                <a href="https://github.com/Bessonglawrence" className="icon i-instagram">
                  <GitHub />
                </a>
            </div>
            <footer className='footer'>
                <p> @2022 My Portfolio Resumé </p>
            </footer>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: 2px solid var(--border-color);
    
    .avatar{
        width: 100%;
        text-align: 'center';
        padding: 1rem 0;
        border-bottom: 1px solid var(--border-color);
        img{
            width: 70%;
            border-radius: 50%;
            margin-left: 40px;
            border: 6px solid var(--border-color)
        }
    }

    .nav-items{
        width: 100%;
        text-align: center;
        .active-class{
            
        }
        li{
            display: block;
            a{
                display: block;
                padding: .3rem 0;
                position: relative;
                z-index: 10;
                text-transform: uppercase;
                font-weight: 600;
                letter-spacing: 1px;
                &:hover{
                    cursor: pointer;
                    color: var(--primary-color);
                }
                &::before{
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 50%;
                    background-color: var(--primary-color);
                    transition:All 0.4s cubic-bezier(.96,-0.12,.05,.99);
                    z-index: 2;
                    opacity: 0.2;
                    transform-origin: bottom;
                }
            }

            a:hover::before{
                width: 100%;
                height: 100%;
            }
        }
    }

    .footer{
        border-top: 1px solid var(--border-color);
        width: 100%;
        p{
            padding: 1rem 0;
            font-size: 1rem;
            display: block;
            text-align: center;
        }
    }
    .icons{
        display: flex;
        justify-content: center;
        .icon{
            border: 1px solid var(--border-color);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            cursor: pointer;
            transition: all .4s ease-in-out;
            &:hover{
                border: 1px solid var(--primary-color);
                color: var(--primary-color);
        }
            &:not(:last-child){
                margin-right: .5rem;
        }
    
    }
`;

export default Navigation;
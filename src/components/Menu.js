import React from 'react';
import styled from 'styled-components';
import {GitHub, Web} from "@material-ui/icons";

function Menu({menuItem}) {
  return (
    <MenuItemStyled>
        {
            menuItem.map((item)=>{
                return(
                    <div className='grid-item' key={item.id}>
                        <div className='portfolio-content'>
                            <div className='portfolio-image'>
                                <img src={item.image} alt="" />
                                <ul>
                                    <li>
                                        <a href={item.link1}>
                                            <GitHub />
                                        </a>
                                    </li>
                                    <li>
                                        <a href={item.link2}>
                                            <Web />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <h6>{item.title}</h6>
                            <p>{item.category} Application built with {item.technology}</p>
                        </div>
                    </div>
                )
            })
        }
    </MenuItemStyled>
  )
}

const MenuItemStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    .grid-item{
        .portfolio-content{
            display: block;
            position: relative;
            img{
                width: 100%;
                height: 30vh;
                object-fit: cover;
            }
            p{
                font-size: .7rem;
                padding-top: .4rem;
                text-align: center;
            }
            ul{
                display: flex;
                justify-content: space-around;
                li{
                    cursor: pointer;
                    padding-top: .1rem;
                    border-radius: 50px;
                    &:hover{
                        color: var(--primary-color);
                        border-radius: 50px;
                    }
                }
            }
            .portfolio-image:hover{
                &::before{
                    content: "";
                    position: absolute;
                    left: 15px;
                    top: 15px;
                    height: calc(100% - 30px);
                    width: calc(100% - 30px);
                    background-color: white;
                    opacity: .9;
                    transform-origin: 0;
                    transform: scale(0);
                    transition: all .4s ease-in-out;
                }
            }
            h6{
                font-style: italic;
                text-align: center;
                color: var(--white-color);
            }
        }
    }
`;

export default Menu;
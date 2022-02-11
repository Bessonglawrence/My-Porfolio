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
                            </div>
                            <ul>
                                <li>
                                    <a href={item.link1}></a>
                                    <GitHub />
                                </li>
                                <li>
                                    <a href={item.link2}></a>
                                    <Web />
                                </li>
                            </ul>
                        </div>
                    </div>
                )
            })
        }
    </MenuItemStyled>
  )
}

const MenuItemStyled = styled.div`

`;

export default Menu;
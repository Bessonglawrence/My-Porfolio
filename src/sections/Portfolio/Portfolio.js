import React, { useState } from 'react';
import styled from 'styled-components';
import {MainLayout, InnerLayout} from '../../styles/Layout';
import Title from '../../components/Title';
import portfolios from '../../res/Data/portfolios';
import Menu from '../../components/Menu';
import Button from '../../components/Button';

const allButtons = ['All', ...new Set(portfolios.map(item => item.category))]

export default function Portfolio() {
    const [menuItem, setMenuItems] = useState(portfolios);
    const [button, setButtons] = useState(allButtons);

    const filter = (button) => {

        if (button === 'All'){
            setMenuItems(portfolios);
            return;
        }
        const filteredData = portfolios.filter(item => item.category === button);
        setMenuItems(filteredData);
    }

    return (
        <MainLayout>
            <Title title={'Portfolios'} span={'Portfolios'} />
            <InnerLayout>
                <Button filter={filter} button={button} />
                <Menu menuItem={menuItem} />
            </InnerLayout>
        </MainLayout>
    )
}

const PortfolioStyled = styled.div`

`;

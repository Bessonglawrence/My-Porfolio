import React, { useState } from 'react';
import styled from 'styled-components';
import {MainLayout, InnerLayout} from '../../styles/Layout';
import Title from '../../components/Title';
import portfolios from '../../res/Data/portfolios';
import Menu from '../../components/Menu';

export default function Portfolio() {
    const [menuItem, setMenuItems] = useState(portfolios);
    return (
        <MainLayout>
            <Title title={'Portfolios'} span={'Portfolios'} />
            <InnerLayout>
                <Menu menuItem={menuItem} />
            </InnerLayout>
        </MainLayout>
    )
}

const PortfolioStyled = styled.div`

`;

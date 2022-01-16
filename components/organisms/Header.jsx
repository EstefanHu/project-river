import React from 'react';
import styled from 'styled-components';

import Logo from '../atoms/Logo';
import HeaderLinks from '../molecules/HeaderLinks';

const StyledHeader = styled.header`
    position: fixed;
    z-index: 10;
    top: 0;
    height: 65px;
    width: 100vw;
    padding: 0 40px;
    background-color: white;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Header = () => {

    return (
        <StyledHeader>
            <Logo />

            <HeaderLinks />
        </StyledHeader>
    );
};

export default Header;

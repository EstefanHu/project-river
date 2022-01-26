import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.h1`
    font-size: 2vw;
    color: ${({ theme }) => theme.textColor};

    span {
        color: ${({ theme }) => theme.redPrimary};
        font-size: 0.85vw;
        text-transform: uppercase;
    }
`;

const Logo = () => <StyledLogo><span>the</span>River</StyledLogo>;

export default Logo;

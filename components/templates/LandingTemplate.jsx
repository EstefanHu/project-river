import React from 'react';
import styled from 'styled-components';

import Header from '../organisms/Header';

const StyledLandingTemplate = styled.div`
    display: flex;
    flex-direction: column;
`;

const LandingTemplate = () => {

    return (
        <StyledLandingTemplate>
            <Header />
        </StyledLandingTemplate>
    );
}; 

export default LandingTemplate;

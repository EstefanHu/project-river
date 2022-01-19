import React from 'react';
import styled from 'styled-components';

import Header from '../organisms/Header';
import Article from '../molecules/Article';

const StyledLandingTemplate = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
`;

const LandingTemplate = () => {

    return (
        <StyledLandingTemplate>
            <Header />
            {/* <Article composition={ } /> */}
        </StyledLandingTemplate>
    );
};

export default LandingTemplate;

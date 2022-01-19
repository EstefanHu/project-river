import React from 'react';
import styled from 'styled-components';

import Header from '../organisms/Header';
import Article from '../molecules/Article';
import Overlay from '../atoms/Overlay';

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
            <Overlay />
        </StyledLandingTemplate>
    );
};

export default LandingTemplate;

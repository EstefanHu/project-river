import React from 'react';
import styled from 'styled-components';

import Header from '../components/shared/header';

const StyledIndex = styled.div`
    display: flex;
`;

const Index = () => {

    return (
        <StyledIndex>
            <Header />
        </StyledIndex>
    )
};

export default Index;

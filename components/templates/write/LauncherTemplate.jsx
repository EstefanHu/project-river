import React from 'react';
import styled from 'styled-components';

const StyledLauncherTemplate = styled.section`
    display: flex;
    justify-content: space-between;
`;

const LauncherTemplate = () => {

    return (
        <StyledLauncherTemplate>
            <h1>launcher</h1>
        </StyledLauncherTemplate>
    )
};

export default LauncherTemplate;

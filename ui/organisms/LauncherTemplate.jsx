import React from 'react';
import styled from 'styled-components';

import Feed from '@atoms/feed';
import Drafts from '@organisms/Drafts';
import WriteLauncher from '@organisms/WriteLauncher';

const StyledLauncherTemplate = styled.section`
    display: flex;
    justify-content: space-between;
`;

const LauncherTemplate = () => {

    return (
        <StyledLauncherTemplate>
            <Feed>
                <Drafts />
            </Feed>

            <WriteLauncher />
        </StyledLauncherTemplate>
    )
};

export default LauncherTemplate;

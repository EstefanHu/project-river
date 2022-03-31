import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useGlobalState } from '@state';
import styled from 'styled-components';

import AppTemplate from '@templates/AppTemplate';
import WriteLauncher from '@organisms/write/WriteLauncher';
import Drafts from '@organisms/Drafts';

const StyledLauncherTemplate = styled.section`
    display: flex;
    justify-content: space-between;
`;

const Write = () => {
    const { checkAuthState } = useGlobalState();
    const { query } = useRouter();

    useEffect(checkAuthState, []);

    return (
        <AppTemplate>
            <WriteLauncher />
            <Drafts />
        </AppTemplate>
    )
};

export default Write;

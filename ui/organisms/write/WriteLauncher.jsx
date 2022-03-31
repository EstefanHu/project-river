import React from 'react';
import styled from 'styled-components';

import Label from '@atoms/Label';
import HorizontalDivider from '@atoms/HorizontalDivider';
import LaunchUpdate from '@atoms/write/LaunchUpdate';
import ActionWrapper from '@molecules/write/ActionWrapper';

const StyledWriteLauncher = styled.div`
    box-shadow: ${({ theme }) => theme.cardShadow};
    padding: 20px 20px 10px;
    background-color: ${({ theme }) => theme.componentBackground};
    border-radius: 10px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const WriteLauncher = () => (
    <StyledWriteLauncher>
        <Label text='create new' />
        <LaunchUpdate />
        <HorizontalDivider />
        <ActionWrapper />
    </StyledWriteLauncher>
);

export default WriteLauncher;

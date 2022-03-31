import React from 'react';
import styled from 'styled-components';

const StyledLaunchUpdate = styled.button`
    margin-top: 5px;
    border-radius: 20px;
    height: 40px;
    width: 100%;
    border: none;
    font-weight: 300;
    text-align: left;
    font-size: 1rem;
    padding: 0 20px;
    background-color: #F0F2F5;
    cursor: pointer;
    transition: 0.1s;
    &:hover {
        background-color: #E4E6E9;
    }
`;

const LaunchUpdate = () => <StyledLaunchUpdate>Post an update</StyledLaunchUpdate>;

export default LaunchUpdate;

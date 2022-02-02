import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { useGlobalState } from '@state';

const StyledWrapper = styled.main`
    padding-top: 70px;
    height: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
`;

const Wrapper = ({ children }) => {
    const { state: { format: { showingOverlay } } } = useGlobalState();
    return (
        <StyledWrapper>{children}</StyledWrapper>
    )
};

Wrapper.propTypes = {
    // Elements inside Wrapper
    children: propTypes.node.isRequired
};

export default Wrapper;

import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledWrapper = styled.main`
    padding-top: 70px;
    height: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
`;

const Wrapper = ({ children }) => <StyledWrapper>{children}</StyledWrapper>;

Wrapper.propTypes = {
    // Elements inside Wrapper
    children: propTypes.node.isRequired
};

export default Wrapper;

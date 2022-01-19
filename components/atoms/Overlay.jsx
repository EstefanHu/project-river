import React from 'react';
import styled from 'styled-components';

const StyledOverlay = styled.div`
    height: 100vh;
    width: 100vw;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;

const Overlay = () => <StyledOverlay />;

export default Overlay;

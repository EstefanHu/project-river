import React, { useState } from 'react';
import { useGlobalState } from '../../state';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import SignIn from './forms/SignIn';
import Register from './forms/Register';

const StyledAuthModal = styled.div`
    position: fixed;
    margin: 35vh auto 0;
    z-index: 100;
    background-color: pink;
    width: 500px;
    box-shadow: ${({ theme }) => theme.boxShadow};
    border-radius: 10px;
    padding: 20px 30px;
`;

const AuthModal = () => {
    const {
        state: { auth: { isAuthing } },
        endAuthing
    } = useGlobalState();
    const [hasAccount, setHasAccount] = useState(true);

    return (
        <StyledAuthModal>

        </StyledAuthModal>
    );
};

export default AuthModal;

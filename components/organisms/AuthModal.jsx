import React, { useState } from 'react';
import { useGlobalState } from '../../state';
import styled from 'styled-components';

import Close from '../atoms/Close';
import SignIn from './forms/SignIn';
import Register from './forms/Register';

const StyledAuthModal = styled.div`
    position: fixed;
    top: 100%;
    left: 50%;
    margin-left: -250px;
    z-index: 100;
    width: 500px;
    box-shadow: ${({ theme }) => theme.boxShadow};
    border-radius: 10px;
    padding: 30px 40px;
    background-color: white;
    outline: none;
    transition: 0.3s;
    ${({ isAuthing }) => isAuthing && `
        top: 30%;
    `}
`;

const AuthModal = () => {
    const {
        state: { auth: { isAuthing } },
        endAuthing
    } = useGlobalState();
    const [hasAccount, setHasAccount] = useState(false);

    return (
        <StyledAuthModal
            tabIndex={isAuthing ? 1 : -1}
            isAuthing={isAuthing}
        >
            <Close close={endAuthing} />
            {hasAccount
                ? <SignIn setHasAccount={setHasAccount} />
                : <Register setHasAccount={setHasAccount} />
            }
        </StyledAuthModal>
    );
};

export default AuthModal;

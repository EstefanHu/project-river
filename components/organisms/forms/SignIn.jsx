import React, { useState } from 'react';
import styled from 'styled-components';
import PropTyped from 'prop-types';
import { useGlobalState } from '../../../state';

const StyledSignIn = styled.form`
    display: flex;
    flex-direction: column;
`;

const SignIn = () => {

    return (
        <StyledSignIn>
            <h1>Sign In</h1>
        </StyledSignIn>
    );
};

export default SignIn;

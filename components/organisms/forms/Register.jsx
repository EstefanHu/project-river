import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useGlobalState } from '../../../state';

const StyledRegister = styled.form``;

const Register = () => {

    return (
        <StyledRegister>
            <h1>Register</h1>
        </StyledRegister>
    );
};

export default Register;

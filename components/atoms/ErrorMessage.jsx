import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledErrorMessage = styled.p`

`;

const ErrorMessage = ({ message }) => <StyledErrorMessage>{message}</StyledErrorMessage>;

ErrorMessage.propTypes = {
    /** Text output for error message */
    message: propTypes.string
};

export default ErrorMessage;

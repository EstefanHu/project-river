import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
    border: 2px solid ${({ theme }) => theme.redPrimary};
    background-color: ${({ theme }) => theme.redPrimary};
    color: white;
    font-size: 1rem;
    font-weight: bold;
    height: 35px;
    padding: 0 15px;
    border-radius: 5px;
    transition: 0.35s;
    cursor: pointer;
    &:hover {
        background-color: white;
        color: ${({ theme }) => theme.redPrimary};
    }
    ${({ style }) => style}
`;

const Button = ({ onClick, label, style }) => (
    <StyledButton
        style={style}
        onClick={onClick}
    >
        {label}
    </StyledButton>
);

Button.propTypes = {
    /** Function to fire on button click */
    onClick: PropTypes.func,
    /** Button text */
    label: PropTypes.string.isRequired
}

export default Button;

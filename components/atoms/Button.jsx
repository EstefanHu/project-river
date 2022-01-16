import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledAction = styled.button`
    border: 2px solid ${props => props.theme.redPrimary};
    background-color: ${props => props.theme.redPrimary};
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
        color: ${props => props.theme.redPrimary};
    }   
`;

const Action = ({ action, label }) => (
    <StyledAction onClick={action}>
        {label}
    </StyledAction>
);

Action.propTypes = {
    /** Function to fire on button click */
    onClick: PropTypes.func,
    /** Button text */
    label: PropTypes.string.isRequired
}

export default Action;

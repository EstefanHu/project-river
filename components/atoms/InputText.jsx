import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledInputText = styled.input`
    height: 35px;
    padding: 0 12px;
    border: 2px solid ${({ theme }) => theme.redPrimary};
    border-radius: 10px;
`;

const InputText = ({ type, value, setValue }) => (
    <StyledInputText
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
    />
);

InputText.propTypes = {
    /** Input type */
    type: PropTypes.oneOf([
        'text',
        'password',
        'email',
        'number',
        'tel',
        'url'
    ]).isRequired,
    /** Input value */
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    /** Func to set value */
    setValue: PropTypes.func.isRequired
};

export default InputText;

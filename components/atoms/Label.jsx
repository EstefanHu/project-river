import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLabel = styled.label`
    font-size: 0.75rem;
    font-weight: bold;
    color: ${({ theme }) => theme.redPrimary};
`;

const Label = ({ text }) => <StyledLabel>{text}</StyledLabel>;

Label.propTypes = { text: PropTypes.string.isRequired };

export default Label;
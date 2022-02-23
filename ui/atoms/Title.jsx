import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledTitle = styled.h1``;

const Title = ({ content }) => <StyledTitle>{content}</StyledTitle>;

Title.propType = {
    /** Text output for Title */
    content: propTypes.string.isRequired
};

export default Title;

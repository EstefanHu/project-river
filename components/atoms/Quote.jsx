import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledQuote = styled.p`
    font-size: 0.8rem;
    text-decoration: italic;
`;

const Quote = ({ content }) => <StyledQuote>&quot;{content}&quot;</StyledQuote>;

Quote.propTypes = {
    /** Text output for Quote */
    content: propTypes.string.isRequired
};

export default Quote;

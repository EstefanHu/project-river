import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledParagraph = styled.p`
    font-size: 0.8rem;
`;

const Paragraph = ({ content }) => <StyledParagraph>{content}</StyledParagraph>;

Paragraph.propTypes = {
    /** Text output for paragraph */
    content: PropTypes.string.isRequired
};

export default Paragraph;

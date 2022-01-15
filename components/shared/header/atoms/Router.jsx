import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledRouter = styled(Link)`
    font-size: 1rem;
    font-weight: bold;
    transition: 0.3s;
    &:hover {
        color: $redPrimary;
    }
`;

const Router = ({ url, label }) => (
    <StyledRouter href={url}>
        {label}
    </StyledRouter>
);

Router.propTypes = {
    /** Internal link */
    url: PropTypes.string.isRequired,
    /** Router text */
    label: PropTypes.string.isRequired
};

export default Router;

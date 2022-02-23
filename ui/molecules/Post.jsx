import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import Title from '@atoms/Title';

const StyledPost = styled.div`
    background-color: ${({ theme }) => theme.componentBackground};
    box-shadow: 4px 4px 5px rgb(0, 0, 0, 0.25);
    border-radius: 15px;
    padding: 20px 30px;
`;

const Post = ({ title }) => (
    <StyledPost>
        <Title>{title}</Title>
    </StyledPost>
);

Post.propTypes = {
    /** title of post */
    title: propTypes.string.isRequired,
};

export default Post;

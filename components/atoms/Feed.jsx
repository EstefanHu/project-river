import React from 'react';
import styled from 'styled-components';

const StyledFeed = styled.main`
    display: flex;
    flex-direction: column;
    width: 800px;
`;

const Feed = ({ children }) => <StyledFeed>{children}</StyledFeed>;

export default Feed;

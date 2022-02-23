import React from 'react';
import styled from 'styled-components';

import H1 from '@atoms/H1';

const StyledDrafts = styled.section`
    display: flex;
    flex-direction: column;
`;

const Drafts = () => {
    

    return (
        <StyledDrafts>
            <H1>drafts</H1>
        </StyledDrafts>
    )
};

export default Drafts;

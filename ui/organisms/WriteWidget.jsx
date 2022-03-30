import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import H1 from '@atoms/H1';
import WriteForm from '@forms/writeForm';

const StyledWriteWidget = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-top: 30px;
    padding: 20px 30px;
`;

const WriteWidget = () => {
    const router = useRouter();
    const { view } = router.query

    return (
        <StyledWriteWidget>
            {/* <H1>Create <span>{view}</span></H1> */}

            <WriteForm />
        </StyledWriteWidget>
    )
};

export default WriteWidget;

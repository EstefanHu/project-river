import React from 'react';
import { useGlobalState } from '@state';

import Header from '@organisms/Header';
import LeftNav from '@organisms/LeftNav';
import Wrapper from '@atoms/Wrapper';

const WriteTemplate = () => {
    const { logout } = useGlobalState();

    return (
        <Wrapper>
            <Header />
            <LeftNav />
        </Wrapper>
    )
};

export default WriteTemplate;

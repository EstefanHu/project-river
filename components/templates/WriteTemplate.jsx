import React from 'react';
import { useRouter } from 'next/router';
import { useGlobalState } from '@state';

import Header from '@organisms/Header';
import LeftNav from '@organisms/LeftNav';
import WriteLauncher from '@organisms/WriteLauncher';
import Wrapper from '@atoms/Wrapper';
import Feed from '@atoms/feed';

import Button from '@atoms/Button';

const WriteTemplate = () => {
    const { logout } = useGlobalState();
    const router = useRouter();

    const renderView = (view) => {
        switch (view) {
            default:
                return <WriteLauncher />;
        }
    }

    return (
        <Wrapper>
            <Header />
            <LeftNav />
            {renderView()}
        </Wrapper>
    )
};

export default WriteTemplate;

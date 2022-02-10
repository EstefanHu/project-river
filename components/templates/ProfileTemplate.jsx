import React from 'react';
import { useGlobalState } from '@state';

import Header from '@organisms/Header';
import LeftNav from '@organisms/LeftNav';
import Wrapper from '@atoms/Wrapper';
import Button from '@atoms/Button';

const ProfileTemplate = () => {
    const { logout } = useGlobalState();

    return (
        <Wrapper>
            <Header />
            <LeftNav />
            <Button
                onClick={logout}
                label='log out'
            />
        </Wrapper>
    )
};

export default ProfileTemplate;

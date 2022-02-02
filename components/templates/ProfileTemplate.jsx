import React from 'react';
import { useGlobalState } from '@state';

import Header from '@organisms/Header';
import Wrapper from '@atoms/Wrapper';
import Button from '@atoms/Button';

const ProfileTemplate = () => {
    const { logout } = useGlobalState();

    return (
        <Wrapper>
            <Header />
            <h1>Profile</h1>
            <h1>Profile</h1>
            <Button
                action={logout}
                label='log out'
            />
        </Wrapper>
    )
};

export default ProfileTemplate;

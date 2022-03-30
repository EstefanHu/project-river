import React, { useEffect } from 'react';
import { useGlobalState } from '@state';

import AppTemplate from '@templates/AppTemplate';
import Button from '@atoms/Button';

const Profile = () => {
    const { checkAuthState, logout } = useGlobalState();

    useEffect(checkAuthState, []);

    return (
        <AppTemplate>
            <Button
                onClick={logout}
                label='log out'
            />
        </AppTemplate>
    )
};

export default Profile;

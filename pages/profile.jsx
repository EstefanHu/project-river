import React, { useEffect } from 'react';
import { useGlobalState } from '@state';
import ProfileTemplate from '@templates/ProfileTemplate';

const Profile = () => {
    const { checkAuthState } = useGlobalState();

    useEffect(checkAuthState, []);

    return <ProfileTemplate />
};

export default Profile;

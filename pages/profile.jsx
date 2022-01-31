import React, { useEffect } from 'react';
import { useGlobalState } from '@state';
import ProfileTemplate from '@components/templates/ProfileTemplate';

const Profile = () => {
    const { checkAuthState } = useGlobalState();

    useEffect(checkAuthState, []);

    return <ProfileTemplate />
};

export default Profile;

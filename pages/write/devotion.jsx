import React, { useEffect } from 'react';
import { useGlobalState } from '@state';
import WriteTemplate from '@templates/WriteTemplate';

const Devotion = () => {
    const { checkAuthState } = useGlobalState();

    useEffect(checkAuthState, []);

    return (
        <WriteTemplate>

        </WriteTemplate>
    )
};

export default Devotion;
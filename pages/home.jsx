import React, { useEffect } from 'react';
import { useGlobalState } from '@state';
import AppTemplate from '@templates/AppTemplate';

const Home = () => {
    const { checkAuthState } = useGlobalState();

    useEffect(checkAuthState, []);

    return (
        <AppTemplate>
            
        </AppTemplate>
    )
};

export default Home;

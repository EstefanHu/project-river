import React, { useEffect } from 'react';
import { useGlobalState } from '@state';
import HomeTemplate from '@templates/HomeTemplate';

const Home = () => {
    const { checkAuthState } = useGlobalState();

    useEffect(checkAuthState, []);

    return <HomeTemplate />;
};

export default Home;

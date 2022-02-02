import React, { useEffect } from 'react';
import { useGlobalState } from '@state';
import DevotionsTemplate from '@templates/DevotionsTemplate';

const Devotions = () => {
    const { checkAuthState } = useGlobalState();

    useEffect(checkAuthState, []);

    return <DevotionsTemplate />
};

export default Devotions;

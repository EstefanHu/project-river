import React, { useEffect } from 'react';
import { useGlobalState } from '@state';

import PoetryTemplate from '@templates/PoetryTemplate';

const Poetry = () => {
    const { checkAuthState } = useGlobalState();

    useEffect(checkAuthState, []);

    return <PoetryTemplate />
};

export default Poetry;

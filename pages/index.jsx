import React, { useEffect } from 'react';
import { useGlobalState } from '@state';

import LandingTemplate from '@templates/LandingTemplate';

const Index = () => {
    const { checkAuthState } = useGlobalState();

    useEffect(checkAuthState, []);

    return <LandingTemplate />
};

export default Index;

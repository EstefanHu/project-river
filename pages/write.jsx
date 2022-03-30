import React, { useEffect } from 'react';
import { useGlobalState } from '@state';

import AppTemplate from '@templates/AppTemplate';

const Write = () => {
    const { checkAuthState } = useGlobalState();

    useEffect(checkAuthState, []);

    return (
        <AppTemplate>
            
        </AppTemplate>
    )
};

export default Write;

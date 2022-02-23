import React, { useEffect } from 'react';
import { useGlobalState } from '@state';

import WriteTemplate from '@templates/WriteTemplate';

const Write = () => {
    const { checkAuthState } = useGlobalState();

    useEffect(checkAuthState, []);

    return <WriteTemplate />;
};

export default Write;

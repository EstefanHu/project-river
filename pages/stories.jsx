import React, { useEffect } from 'react';
import { useGlobalState } from '@state';

import StoriesTemplate from '@templates/StoriesTemplate';

const Stories = () => {
    const { checkAuthState } = useGlobalState();

    useEffect(checkAuthState, []);

    return <StoriesTemplate />
};

export default Stories;

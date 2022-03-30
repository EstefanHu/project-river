import React, { useEffect } from 'react';
import { useGlobalState } from '@state';

import PostTemplate from 'ui/templates/PostTemplate';

const Poetry = () => {
    const { checkAuthState } = useGlobalState();

    useEffect(checkAuthState, []);

    return (
        <PostTemplate>

        </PostTemplate>
    )
};

export default Poetry;

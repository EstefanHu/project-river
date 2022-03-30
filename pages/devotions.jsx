import React, { useEffect } from 'react';
import { useGlobalState } from '@state';
import PostTemplate from '@templates/PostTemplate';

const Devotions = () => {
    const { checkAuthState } = useGlobalState();

    useEffect(checkAuthState, []);

    return (
        <PostTemplate>

        </PostTemplate>
    )
};

export default Devotions;

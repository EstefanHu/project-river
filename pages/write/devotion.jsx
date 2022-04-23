import React, { useEffect } from 'react';
import { useGlobalState } from '@state';
import WriteTemplate from '@templates/WriteTemplate';

import Title from '@atoms/Title';
import TitleInput from '@molecules/write/TitleInput';

const Devotion = () => {
    const { checkAuthState } = useGlobalState();

    useEffect(checkAuthState, []);

    return (
        <WriteTemplate>
            <Title>Devotional</Title>
            <TitleInput />
        </WriteTemplate>
    )
};

export default Devotion;
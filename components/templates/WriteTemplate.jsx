import React from 'react';
import { useRouter } from 'next/router';
import { useGlobalState } from '@state';

import Header from '@organisms/Header';
import LeftNav from '@organisms/LeftNav';
import Wrapper from '@atoms/Wrapper';
import Feed from '@atoms/feed';

import Button from '@atoms/Button';
import LauncherTemplate from './write/LauncherTemplate';
import DevotionTemplate from './write/DevotionTemplate';
import PoemTemplate from './write/PoemTemplate';
import StoryTemplate from './write/StoryTemplate';

const WriteTemplate = () => {
    const { logout } = useGlobalState();
    const router = useRouter();
    const view = router.pathname.split('/')[1];

    const renderView = (view) => {
        switch (view) {
            case 'devotional':
                return <DevotionTemplate />;
            case 'poem':
                return <PoemTemplate />;
            case 'story':
                return <StoryTemplate />;
            default:
                return <LauncherTemplate />;
        }
    }

    return (
        <Wrapper>
            <Header />
            <LeftNav />
            {renderView(view)}
        </Wrapper>
    )
};

export default WriteTemplate;

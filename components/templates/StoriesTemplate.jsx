import React from 'react';

import Header from '@organisms/Header';
import Overlay from '@atoms/Overlay';
import Wrapper from '@atoms/Wrapper';

const StoriesTemplate = () => {

    return (
        <Wrapper>
            <Header />
            <Overlay />
        </Wrapper>
    );
};

export default StoriesTemplate;

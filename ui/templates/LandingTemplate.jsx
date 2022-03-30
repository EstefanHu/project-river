import React from 'react';

import Header from '@organisms/Header';
import LeftNav from '@organisms/LeftNav';
import Article from '@molecules/Article';
import Overlay from '@atoms/Overlay';
import Wrapper from '@atoms/Wrapper';

const LandingTemplate = () => {

    return (
        <Wrapper>
            <Header />
            <LeftNav />
            {/* <Article composition={ } /> */}
            <Overlay />
        </Wrapper>
    );
};

export default LandingTemplate;

import React from 'react';

import Header from '@organisms/Header';
import Article from '@molecules/Article';
import Overlay from '@atoms/Overlay';
import Wrapper from '@atoms/Wrapper';

const LandingTemplate = () => {

    return (
        <Wrapper>
            <Header />
            {/* <Article composition={ } /> */}
            <Overlay />
        </Wrapper>
    );
};

export default LandingTemplate;

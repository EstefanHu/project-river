import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useGlobalState } from '@state';

import Loading from '@atoms/Loading';
import Wrapper from '@atoms/Wrapper';
import Overlay from '@atoms/Overlay';
import Header from '@organisms/Header';
import LeftNav from '@organisms/LeftNav';

const PostTemplate = ({ children }) => {

    return (
        <Wrapper>
            <Header />
            <LeftNav />
            {children}
            <Overlay />
        </Wrapper>
    )
};

export default PostTemplate;

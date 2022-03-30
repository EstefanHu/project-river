import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useGlobalState } from '@state';

import Loading from '@atoms/Loading';
import Wrapper from '@atoms/Wrapper';
import Overlay from '@atoms/Overlay';
import Header from '@organisms/Header';
import LeftNav from '@organisms/LeftNav';

const PostTemplate = ({ children }) => {
    const { state: { auth: { user } } } = useGlobalState();
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        setIsLoading(true)
        if (!user) router.push('/');
        setIsLoading(false);
    }, [user, router]);

    if (isLoading) return <Loading />;

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

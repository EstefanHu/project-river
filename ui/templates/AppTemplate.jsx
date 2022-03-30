import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useGlobalState } from '@state';

import Loading from '@atoms/Loading';
import Wrapper from '@atoms/Wrapper';
import Header from '@organisms/Header';
import LeftNav from '@organisms/LeftNav';

const AppTemplate = ({ children }) => {
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
        </Wrapper>
    )
};

export default AppTemplate;

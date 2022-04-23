import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useGlobalState } from '@state';
import styled from 'styled-components';

import Loading from '@atoms/Loading';
import Wrapper from '@atoms/Wrapper';
import LandingHeader from '@organisms/landing/LandingHeader';
import LeftNav from '@organisms/LeftNav';

const StyledAppTemplate = styled.div`
    width: 700px;
`;

const AppTemplate = ({ children }) => {
    const { state: { auth: { user } } } = useGlobalState();
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        setIsLoading(true)
        // if (!user) router.push('/');
        setIsLoading(false);
    }, [user, router]);

    if (isLoading) return <Loading />;

    return (
        <Wrapper>
            <LandingHeader />
            <LeftNav />
            <StyledAppTemplate>
                {children}
            </StyledAppTemplate>
        </Wrapper>
    )
};

export default AppTemplate;
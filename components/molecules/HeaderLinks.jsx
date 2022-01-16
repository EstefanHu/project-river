import React from 'react';
import { useRouter } from 'next/router';
import { useGlobalState } from '../../state';
import styled from 'styled-components';

import Href from '../atoms/Href';
import Button from '../atoms/Button';
import ProfileImage from '../atoms/ProfileImage';

const StyledHeaderLinks = styled.span`
    display:flex;
    align-items: center;
    width: 370px;
    &>*:not(a) {
        margin-left: auto;
    }
`;

const HeaderLinks = () => {
    const {
        state: { auth: { isLoggedIn, isAuthing } },
        startAuthing
    } = useGlobalState();
    const router = useRouter();

    return (
        <StyledHeaderLinks>
            {
                chooseHref(router.pathname)
                    .map((l) => (
                        <Href
                            key={l.label}
                            url={l.url}
                            label={l.label}
                        />
                    ))
            }
            {isAuthing ? <ProfileImage /> : <Button action={startAuthing} label='login' />}
        </StyledHeaderLinks>
    );
};

const chooseHref = (path) => {
    switch (path) {
        default:
            return [
                {
                    url: '/devotions',
                    label: 'devotions'
                },
                {
                    url: '/stories',
                    label: 'stories'
                },
                {
                    url: '/poetry',
                    label: 'poetry'
                }
            ];
    };
};

export default HeaderLinks;

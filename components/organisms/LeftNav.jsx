import React from 'react';
import styled from 'styled-components';
import { useGlobalState } from '@lib/state';

import NavItem from '@atoms/NavItem';

const StyledLeftNav = styled.nav`
    position: fixed;
    left: ${({ isShowing }) => isShowing ? '0' : '-240'}px;
    top: 0px;
    bottom: 0;
    width: 220px;
    background-color: ${({ theme }) => theme.componentBackground};
    box-shadow: 3px 0 10px rgba(0, 0, 0, 0.25);
    padding-top: 70px;
    display: flex;
    flex-direction: column;
    transition: 0.3s;
    &>:last-child {
        margin-top: auto;
        background-color: lightgrey;
    }
`;

const LINKS = [
    { href: '/', label: 'home' },
    { href: '/write', label: 'write' },
    { href: '/profile', label: 'profile' },
];

const LeftNav = () => {
    const { state: { auth: { user } } } = useGlobalState();

    return (
        <StyledLeftNav isShowing={!!user}>
            {LINKS.map((l) => (
                <NavItem
                    key={l.label}
                    href={l.href}
                    label={l.label}
                />
            ))}
            <NavItem
                href='/settings'
                label='settings'
            />
        </StyledLeftNav>
    )
};

export default LeftNav;

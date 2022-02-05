import React from 'react';
import Link from 'next/link';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const StyledNavItem = styled.a`
    height: 65px;
    padding: 0 25px;
    font-color: ${({ theme }) => theme.textColor};
    text-transform: uppercase;
    font-size: 1.1rem;
    font-weight: bold;
    transition: 0.3s;
    display: flex;
    align-items: center;
    &:hover {
        background-color: lightgrey;
    }
`;

const NavItem = ({ href, label }) => {
    const router = useRouter();
    const { pathname } = router;

    return (
        <Link href={href} passHref>
            <StyledNavItem>{label}</StyledNavItem>
        </Link>
    )
};

NavItem.propTypes = {
    /** href to internal page */
    href: propTypes.string.isRequired,
    /** text to display */
    label: propTypes.string.isRequired
};

export default NavItem;

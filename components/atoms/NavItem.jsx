import React from 'react';
import Link from 'next/link';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const StyledNavItem = styled.a`
    height: 55px;
    padding: 0 25px;
    color: ${({ isSelected, theme }) => isSelected ? theme.redPrimary : theme.textColor};
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: bold;
    transition: 0.3s;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
        background-color: rgb(240, 240, 240);
    }
    svg {
        height: 25px;
        width: 25px;
        margin-right: 15px;
    }
`;

const NavItem = ({ key, href, children }) => {
    const router = useRouter();
    const { pathname } = router;

    return (
        <Link href={href} passHref>
            <StyledNavItem isSelected={pathname.includes(children[1])}>
                {children}
            </StyledNavItem>
        </Link>
    )
};

NavItem.propTypes = {
    /** href to internal page */
    href: propTypes.string.isRequired,
};

export default NavItem;

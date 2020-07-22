import React, { FC } from 'react';
import navS from './NavList.module.scss';
import { NavLink } from 'react-router-dom';
import { NavListArrI, NavListPropsI, StyledNavI } from '../../interfaces/navBarInterface';
import styled from 'styled-components';

const StyledNav = styled.nav<StyledNavI>`
    @media (max-width: 768px) {
        transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(105%)')};
        transition: transform 0.2s ease-in-out;
    }
`;

const NavList: FC<NavListPropsI> = ({ open }: NavListPropsI) => {
    const navList: NavListArrI[] = [
        { name: 'home', id: 1 },
        { name: 'about', id: 2 },
        { name: 'skills', id: 3 },
        { name: 'experience', id: 4 },
        { name: 'portfolio', id: 5 },
    ];

    return (
        <StyledNav className={navS.navWrapper} open={open}>
            <ul className={navS.list}>
                {navList.map((item) => (
                    <li key={item.id}>
                        <NavLink
                            exact
                            className={navS.listItem}
                            activeClassName={navS.listItemActive}
                            to={item.name === 'home' ? '/' : item.name}
                        >
                            {item.name}
                        </NavLink>
                    </li>
                ))}
                <div className={navS.itemLangContainer}>
                    <li className={navS.listItemLang}>ru</li>
                    <li className={`${navS.listItemLang} ${navS.listItemLangActive}`}>eng</li>
                </div>
            </ul>
        </StyledNav>
    );
};

export default NavList;

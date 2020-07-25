import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import navS from './NavList.module.scss';
import SelectLang from '../select_lang/SelectLang';
import { NavListPropsI, StyledNavI } from '../../interfaces/navBarInterface';

const StyledNav = styled.nav<StyledNavI>`
    @media (max-width: 768px) {
        transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(105%)')};
        transition: transform 0.2s ease-in-out;
    }
`;

const NavList: FC<NavListPropsI> = ({ open, navBarData }: NavListPropsI) => {
    const navList = navBarData.navListArr;
    const langList = navBarData.langList;

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
                <SelectLang langList={langList} />
            </ul>
        </StyledNav>
    );
};

export default NavList;

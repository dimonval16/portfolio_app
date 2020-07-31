import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import navS from './NavList.module.scss';
import SelectPanel from '../select_panel/SelectPanel';
import { NavListPropsI, StyledNavI, StyledNavLinkI } from '../../interfaces/navBarInterface';

const StyledNav = styled.nav<StyledNavI>`
    @media (max-width: 768px) {
        transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(105%)')};
        transition: transform 0.2s ease-in-out;
        background-color: ${({ primaryBlockColor }) => primaryBlockColor};
    }
`;

const StyledNavLink = styled(NavLink)<StyledNavLinkI>`
    color: ${({ primary }) => primary};

    @media (max-width: 768px) {
        color: white;
    }

    &:hover {
        color: ${({ action }) => action};
    }
`;

const NavList: FC<NavListPropsI> = ({
    open,
    navBarData,
    onToggleLanguage,
    onToggleTheme,
    themeMode,
}: NavListPropsI) => {
    const navList = navBarData.navListArr;
    const selectPanel = navBarData.selectPanel;

    return (
        <StyledNav className={navS.navWrapper} open={open} primaryBlockColor={themeMode.primaryBlockColor}>
            <ul className={navS.list}>
                {navList.map((item) => (
                    <li key={item.id}>
                        <StyledNavLink
                            exact
                            className={navS.listItem}
                            activeStyle={{ color: themeMode.actionColor, fontSize: '1.4rem' }}
                            to={item.link === 'home' ? '/' : item.link}
                            primary={themeMode.primaryTextColor}
                            action={themeMode.actionColor}
                        >
                            {item.name}
                        </StyledNavLink>
                    </li>
                ))}
                <SelectPanel
                    labelLeft={selectPanel.rus}
                    labelRight={selectPanel.eng}
                    onTogglePanel={onToggleLanguage}
                    themeMode={themeMode}
                />
                <SelectPanel
                    labelLeft={selectPanel.dark}
                    labelRight={selectPanel.light}
                    onTogglePanel={onToggleTheme}
                    themeMode={themeMode}
                />
            </ul>
        </StyledNav>
    );
};

export default NavList;

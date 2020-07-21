import React, { FC } from 'react';
import navS from './NavBar.module.scss';
import { NavListI } from '../../interfaces/navBarInterface';
import { NavLink } from 'react-router-dom';

const NavBar: FC = () => {
    const navList: NavListI[] = [
        { name: 'home', id: 1 },
        { name: 'about', id: 2 },
        { name: 'skills', id: 3 },
        { name: 'experience', id: 4 },
        { name: 'portfolio', id: 5 },
    ];

    return (
        <nav className={navS.navWrapper}>
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
        </nav>
    );
};

export default NavBar;

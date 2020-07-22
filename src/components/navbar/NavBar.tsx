import React, { FC, useState } from 'react';
import NavList from '../nav_list/NavList';
import BurgerButton from '../burger_button/BurgerButton';

const NavBar: FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <NavList open={open} />
            <BurgerButton onSetOpen={() => setOpen(!open)} open={open} />
        </>
    );
};

export default NavBar;

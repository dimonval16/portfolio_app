import React, { FC, useState } from 'react';
import { connect } from 'react-redux';
import { InitialStateType } from '../../redux/state/state';
import { AppDispatch } from '../../redux/store';
import NavList from '../nav_list/NavList';
import BurgerButton from '../burger_button/BurgerButton';
import { NavBarPropsI } from '../../interfaces/navBarInterface';

const NavBar: FC<NavBarPropsI> = ({ navBarData }: NavBarPropsI) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <NavList open={open} navBarData={navBarData} />
            <BurgerButton onSetOpen={() => setOpen(!open)} open={open} />
        </>
    );
};

const mapState = (state: InitialStateType) => {
    return {
        navBarData: state.langMode.currentMode.navBar,
    };
};

const mapDispatch = (dispatch: AppDispatch) => {
    return {};
};

export default connect(mapState, mapDispatch)(NavBar);

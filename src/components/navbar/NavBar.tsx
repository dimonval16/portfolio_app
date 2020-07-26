import React, { FC, useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { InitialStateType } from '../../redux/state/state';
import NavList from '../nav_list/NavList';
import BurgerButton from '../burger_button/BurgerButton';
import { NavBarPropsI, NavBarDataI } from '../../interfaces/navBarInterface';
import { toggleLanguageAC } from '../../redux/actions/langModeActions';

const NavBar: FC<NavBarPropsI> = ({ navBarData, toggleLanguage }: NavBarPropsI) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <NavList open={open} navBarData={navBarData} onToggleLanguage={toggleLanguage} />
            <BurgerButton onSetOpen={() => setOpen(!open)} open={open} />
        </>
    );
};

interface MapStatePropsI {
    navBarData: NavBarDataI;
}

interface MapDispatchPropsI {
    toggleLanguage: (toggleEvent: boolean) => void;
}

const mapState = (state: InitialStateType): MapStatePropsI => {
    return {
        navBarData: state.langMode.currentMode.navBar,
    };
};

const mapDispatch = (dispatch: Dispatch): MapDispatchPropsI => {
    return {
        toggleLanguage: (toggleEvent: boolean) => dispatch(toggleLanguageAC(toggleEvent)),
    };
};

export default connect(mapState, mapDispatch)(NavBar);

import React, { FC, useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { InitialStateType } from '../../redux/state/state';
import NavList from '../nav_list/NavList';
import BurgerButton from '../burger_button/BurgerButton';
import { NavBarPropsI, MapStatePropsI, MapDispatchPropsI } from '../../interfaces/navBarInterface';
import { toggleLanguageAC } from '../../redux/actions/langModeActions';
import { toggleThemeAC } from '../../redux/actions/themeModeActions';

const NavBar: FC<NavBarPropsI> = ({ navBarData, themeMode, toggleTheme, toggleLanguage }: NavBarPropsI) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <NavList
                open={open}
                navBarData={navBarData}
                onToggleLanguage={toggleLanguage}
                onToggleTheme={toggleTheme}
                themeMode={themeMode}
            />
            <BurgerButton onSetOpen={() => setOpen(!open)} open={open} themeColor={themeMode.primaryTextColor} />
        </>
    );
};

const mapState = (state: InitialStateType): MapStatePropsI => {
    return {
        navBarData: state.langMode.currentLang.navBar,
        themeMode: state.themeMode.currentTheme,
    };
};

const mapDispatch = (dispatch: Dispatch): MapDispatchPropsI => {
    return {
        toggleLanguage: (toggleEvent: boolean) => dispatch(toggleLanguageAC(toggleEvent)),
        toggleTheme: (toggleEvent: boolean) => dispatch(toggleThemeAC(toggleEvent)),
    };
};

export default connect(mapState, mapDispatch)(NavBar);

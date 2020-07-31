import { ThemeModeI } from './themeModeInterfaces';
import { ChangeEvent } from 'react';

interface NavListArrI {
    name: string;
    id: string | number;
    link: string;
}

interface SelectPanelI {
    rus: string;
    eng: string;
    light: string;
    dark: string;
}

export interface NavBarDataI {
    navListArr: NavListArrI[];
    selectPanel: SelectPanelI;
}

export interface StyledNavI {
    open: boolean;
    primaryBlockColor: string;
}

export interface StyledNavLinkI {
    primary: string;
    action: string;
}

export interface NavBarPropsI {
    navBarData: NavBarDataI;
    toggleLanguage: (toggleEvent: boolean) => void;
    toggleTheme: (toggleEvent: boolean) => void;
    themeMode: ThemeModeI;
}

export interface NavListPropsI {
    open: boolean;
    navBarData: NavBarDataI;
    onToggleLanguage: (toggleEvent: boolean) => void;
    onToggleTheme: (toggleEvent: boolean) => void;
    themeMode: ThemeModeI;
}

export interface SelectPanelPropsI {
    labelLeft: string;
    labelRight: string;
    onTogglePanel: (toggleEvent: boolean) => void;
    themeMode: ThemeModeI;
}

export interface SwitchComponentPropsI {
    themeMode: ThemeModeI;
    switchValue: boolean;
    handleSwitchChange: (toggleEvent: ChangeEvent<HTMLInputElement>) => void;
}

export interface MapStatePropsI {
    navBarData: NavBarDataI;
    themeMode: ThemeModeI;
}

export interface MapDispatchPropsI {
    toggleLanguage: (toggleEvent: boolean) => void;
    toggleTheme: (toggleEvent: boolean) => void;
}

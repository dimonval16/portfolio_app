import { ThemeModeI } from './themeModeInterfaces';

interface SloganI {
    greeting: string;
    lastName: string;
    profession: string;
}

interface FooterI {
    js: string;
    react: string;
    desktopCV: string;
    mobileCV: string;
}

interface MainPageDataI {
    slogan: SloganI;
    footer: FooterI;
}

export interface MainPagePropsI {
    mainPageData: MainPageDataI;
    themeMode: ThemeModeI;
}

export interface SloganPropsI {
    sloganData: SloganI;
    themeMode: ThemeModeI;
}

export interface PhotoBlockPropsI {
    themeMode: string;
}

export interface FooterPropsI {
    footerData: FooterI;
    themeMode: ThemeModeI;
}

export interface ButtonCVPropsI {
    desktopCV: string;
    mobileCV: string;
    themeMode: ThemeModeI;
}

export interface StyledButtonPropsI {
    mobileCV: string;
    bgColor: string;
}

export interface StyledMainPageI {
    bgColor: string;
}

export interface StyledSloganUnderlineI {
    bgColor: string;
}

export interface StyledImageI {
    colorsType: string;
}

export interface MainMapStateI {
    mainPageData: MainPageDataI;
    themeMode: ThemeModeI;
}

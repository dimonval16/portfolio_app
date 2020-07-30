import { ThemeModeI } from './navBarInterface';

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
}

export interface FooterPropsI {
    footerData: FooterI;
}

export interface ButtonCVPropsI {
    desktopCV: string;
    mobileCV: string;
}

export interface StyledButtonPropsI {
    mobileCV: string;
}

export interface StyledMainPageI {
    bgcolor: string;
}

export interface MainMapStateI {
    mainPageData: MainPageDataI;
    themeMode: ThemeModeI;
}

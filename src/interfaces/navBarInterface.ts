export interface ThemeModeI {
    primaryTextColor: string;
    professionTextColor: string;
    actionColor: string;
    backgroundColor: string;
    primaryBlockColor: string;
    secondaryBlockColor: string;
}

interface NavListArrI {
    name: string;
    id: string | number;
    link: string;
}

interface LangListI {
    rus: string;
    eng: string;
}

export interface NavBarDataI {
    navListArr: NavListArrI[];
    langList: LangListI;
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
    themeMode: ThemeModeI;
}

export interface NavListPropsI {
    open: boolean;
    navBarData: NavBarDataI;
    onToggleLanguage: (toggleEvent: boolean) => void;
    themeMode: ThemeModeI;
}

export interface SelectLangPropsI {
    langList: LangListI;
    onToggleLanguage: (toggleEvent: boolean) => void;
    themeMode: ThemeModeI;
}

export interface MapStatePropsI {
    navBarData: NavBarDataI;
    themeMode: ThemeModeI;
}

export interface MapDispatchPropsI {
    toggleLanguage: (toggleEvent: boolean) => void;
}

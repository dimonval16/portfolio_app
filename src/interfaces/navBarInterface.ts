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
}

export interface NavBarPropsI {
    navBarData: NavBarDataI;
    toggleLanguage: (toggleEvent: boolean) => void;
}

export interface NavListPropsI {
    open: boolean;
    navBarData: NavBarDataI;
    onToggleLanguage: (toggleEvent: boolean) => void;
}

export interface SelectLangPropsI {
    langList: LangListI;
    onToggleLanguage: (toggleEvent: boolean) => void;
}

interface NavListArrI {
    name: string;
    id: string | number;
}

interface LangListI {
    rus: string;
    eng: string;
}

interface NavBarDataI {
    navListArr: NavListArrI[];
    langList: LangListI;
}

export interface StyledNavI {
    open: boolean;
}

export interface NavBarPropsI {
    navBarData: NavBarDataI;
}

export interface NavListPropsI {
    open: boolean;
    navBarData: NavBarDataI;
}

export interface SelectLangPropsI {
    langList: LangListI;
}

export interface StyledBurgerI {
    open: boolean;
    themeColor: string;
}

export interface BurgerButtonPropsI {
    onSetOpen: () => void;
    open: boolean;
    themeColor: string;
}

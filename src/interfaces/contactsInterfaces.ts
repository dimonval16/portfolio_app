import { ThemeModeI } from './themeModeInterfaces';

export interface ContactsDataI {
    link: string;
    style: any;
    id: string | number;
}

export interface ContactsPropsI {
    themeMode: ThemeModeI;
}

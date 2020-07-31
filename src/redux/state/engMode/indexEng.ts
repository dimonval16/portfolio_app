import { mainPageEng } from './mainEng';

export const engMode = {
    navBar: {
        navListArr: [
            { name: 'home', link: 'home', id: 1 },
            { name: 'about', link: 'about', id: 2 },
            { name: 'skills', link: 'skills', id: 3 },
            { name: 'experience', link: 'experience', id: 4 },
            { name: 'portfolio', link: 'portfolio', id: 5 },
        ],
        selectPanel: {
            rus: 'Rus',
            eng: 'Eng',
            light: 'Light',
            dark: 'Dark',
        },
    },
    mainPage: mainPageEng,
};

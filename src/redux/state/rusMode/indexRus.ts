import { mainPageRus } from './mainRus';

export const rusMode = {
    navBar: {
        navListArr: [
            { name: 'главная', link: 'home', id: 1 },
            { name: 'обо мне', link: 'about', id: 2 },
            { name: 'навыки', link: 'skills', id: 3 },
            { name: 'опыт', link: 'experience', id: 4 },
            { name: 'портфолио', link: 'portfolio', id: 5 },
        ],
        selectPanel: {
            rus: 'Рус',
            eng: 'Англ',
            light: 'Светлое',
            dark: 'Темное',
        },
    },
    mainPage: mainPageRus,
};

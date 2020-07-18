import React, { FC } from 'react';
import mainS from './MainPage.module.scss';
import Contacts from '../../components/contacts/Contacts';

const MainPage: FC = () => {
    return (
        <>
            <div className={mainS.mainPageContent}>
                <Contacts />
                <section>Slogan</section>
                <section>Photo</section>
            </div>
            <footer>
                <span>React </span>
                <span>JavaScript</span>
            </footer>
        </>
    );
};

export default MainPage;

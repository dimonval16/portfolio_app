import React, { FC } from 'react';
import mainS from './MainPage.module.scss';
import Contacts from '../../components/contacts/Contacts';
import MainPageSlogan from '../../components/main_page_slogan/MainPageSlogan';
import PhotoBlock from '../../components/photo_block/PhotoBlock';
import MainFooter from '../../components/main_footer/MainFooter';

const MainPage: FC = () => {
    return (
        <div className={mainS.mainPageWrapper}>
            <div className={mainS.mainPageContent}>
                <Contacts />
                <MainPageSlogan />
                <PhotoBlock />
            </div>
            <MainFooter />
        </div>
    );
};

export default MainPage;

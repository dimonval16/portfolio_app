import React, { FC } from 'react';
import mainS from './MainPage.module.scss';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { InitialStateType } from '../../redux/state/state';
import Contacts from '../../components/contacts/Contacts';
import MainPageSlogan from '../../components/main_page_slogan/MainPageSlogan';
import PhotoBlock from '../../components/photo_block/PhotoBlock';
import MainFooter from '../../components/main_footer/MainFooter';
import { MainPagePropsI } from '../../interfaces/mainPageInterfaces';

const MainPage: FC<MainPagePropsI> = ({ mainPageData }: MainPagePropsI) => {
    return (
        <div className={mainS.mainPageWrapper}>
            <div className={mainS.mainPageContent}>
                <Contacts />
                <MainPageSlogan sloganData={mainPageData.slogan} />
                <PhotoBlock />
            </div>
            <MainFooter footerData={mainPageData.footer} />
        </div>
    );
};

const mapState = (state: InitialStateType) => {
    return {
        mainPageData: state.langMode.currentMode.mainPage,
    };
};

const mapDispatch = (dispatch: Dispatch) => {
    return {};
};

export default connect(mapState, mapDispatch)(MainPage);

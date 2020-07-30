import React, { FC } from 'react';
import mainS from './MainPage.module.scss';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { InitialStateType } from '../../redux/state/state';
import Contacts from '../../components/contacts/Contacts';
import MainPageSlogan from '../../components/main_page_slogan/MainPageSlogan';
import PhotoBlock from '../../components/photo_block/PhotoBlock';
import MainFooter from '../../components/main_footer/MainFooter';
import { MainPagePropsI, MainMapStateI, StyledMainPageI } from '../../interfaces/mainPageInterfaces';

const StyledWrapper = styled.div<StyledMainPageI>`
    background-color: ${({ bgcolor }) => bgcolor};
`;

const MainPage: FC<MainPagePropsI> = ({ mainPageData, themeMode }: MainPagePropsI) => {
    return (
        <StyledWrapper className={mainS.mainPageWrapper} bgcolor={themeMode.backgroundColor}>
            <div className={mainS.mainPageContent}>
                <Contacts />
                <MainPageSlogan sloganData={mainPageData.slogan} />
                <PhotoBlock />
            </div>
            <MainFooter footerData={mainPageData.footer} />
        </StyledWrapper>
    );
};

const mapState = (state: InitialStateType): MainMapStateI => {
    return {
        mainPageData: state.langMode.currentLang.mainPage,
        themeMode: state.themeMode.currentTheme,
    };
};

const mapDispatch = (dispatch: Dispatch) => {
    return {};
};

export default connect(mapState, mapDispatch)(MainPage);

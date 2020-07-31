import React, { FC } from 'react';
import styled from 'styled-components';
import mainFooterS from './MainFooter.module.scss';
import ButtonCv from '../cv_button/ButtonCv';
import { FooterPropsI, StyledImageI } from '../../interfaces/mainPageInterfaces';

const StyledText = styled.span`
    color: ${({ color }) => color};
`;

const StyledFooterImgWrapper = styled.div<StyledImageI>`
    background-image: url(${({ colorsType }) =>
        colorsType === 'light' ? 'img/footer_bg_light.png' : 'img/footer_bg_dark.png'});
`;

const MainFooter: FC<FooterPropsI> = ({ footerData, themeMode }: FooterPropsI) => {
    return (
        <footer className={mainFooterS.footerWrapper}>
            <StyledFooterImgWrapper className={mainFooterS.footerImgWrapper} colorsType={themeMode.colorsType}>
                <StyledText className={mainFooterS.jsText} color={themeMode.actionColor}>
                    {footerData.js}
                </StyledText>
                <StyledText className={mainFooterS.reactText} color={themeMode.primaryTextColor}>
                    {footerData.react}
                </StyledText>
            </StyledFooterImgWrapper>
            <ButtonCv desktopCV={footerData.desktopCV} mobileCV={footerData.mobileCV} themeMode={themeMode} />
        </footer>
    );
};

export default MainFooter;

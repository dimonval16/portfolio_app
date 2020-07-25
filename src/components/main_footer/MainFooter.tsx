import React, { FC } from 'react';
import mainFooterS from './MainFooter.module.scss';
import ButtonCv from '../cv_button/ButtonCv';
import { FooterPropsI } from '../../interfaces/mainPageInterfaces';

const MainFooter: FC<FooterPropsI> = ({ footerData }: FooterPropsI) => {
    return (
        <footer className={mainFooterS.footerWrapper}>
            <div className={mainFooterS.footerImgWrapper}>
                <span className={mainFooterS.jsText}>{footerData.js}</span>
                <span className={mainFooterS.reactText}>{footerData.react}</span>
            </div>
            <ButtonCv desktopCV={footerData.desktopCV} mobileCV={footerData.mobileCV} />
        </footer>
    );
};

export default MainFooter;

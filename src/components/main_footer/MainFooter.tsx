import React, { FC } from 'react';
import mainFooterS from './MainFooter.module.scss';
import ButtonCv from '../cv_button/ButtonCv';

const MainFooter: FC = () => {
    return (
        <footer className={mainFooterS.footerWrapper}>
            <div className={mainFooterS.footerImgWrapper}>
                <span className={mainFooterS.jsText}>JavaScript</span>
                <span className={mainFooterS.reactText}>React</span>
            </div>
            <ButtonCv />
        </footer>
    );
};

export default MainFooter;

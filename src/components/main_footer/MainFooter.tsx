import React, { FC } from 'react';
import mainFooterS from './MainFooter.module.scss';

const MainFooter: FC = () => {
    return (
        <footer className={mainFooterS.footerWrapper}>
            <span className={mainFooterS.jsText}>JavaScript</span>
            <span className={mainFooterS.reactText}>React</span>
        </footer>
    );
};

export default MainFooter;

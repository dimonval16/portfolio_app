import React, { FC } from 'react';
import sloganS from './MainPageSlogan.module.scss';

const MainPageSlogan: FC = () => {
    return (
        <section className={sloganS.sloganWrapper}>
            <div className={sloganS.greeting}>
                <span>{`I'm Dmytro`}</span>
                <br />
                <span>Volynskyi</span>
                <div className={sloganS.line} />
            </div>
            <div className={sloganS.profession}>Frontend developer</div>
        </section>
    );
};

export default MainPageSlogan;

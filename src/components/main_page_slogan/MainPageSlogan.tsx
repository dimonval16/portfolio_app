import React, { FC } from 'react';
import sloganS from './MainPageSlogan.module.scss';
import { SloganPropsI } from '../../interfaces/mainPageInterfaces';

const MainPageSlogan: FC<SloganPropsI> = ({ sloganData }: SloganPropsI) => {
    return (
        <section className={sloganS.sloganWrapper}>
            <div className={sloganS.greeting}>
                <span>{sloganData.greeting}</span>
                <br />
                <span>{sloganData.lastName}</span>
                <div className={sloganS.line} />
            </div>
            <div className={sloganS.profession}>{sloganData.profession}</div>
        </section>
    );
};

export default MainPageSlogan;

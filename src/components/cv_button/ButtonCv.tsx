import React, { FC } from 'react';
import cvButtonS from './CvButton.module.scss';
import { ButtonCVPropsI } from '../../interfaces/mainPageInterfaces';

const ButtonCv: FC<ButtonCVPropsI> = ({ desktopCV, mobileCV }: ButtonCVPropsI) => {
    return (
        <a className={cvButtonS.linkWrapper} download href={'download/front_resume.pdf'}>
            <div className={cvButtonS.cvButtonWrapper}>
                <span>{desktopCV}</span>
                <span>+</span>
            </div>
        </a>
    );
};

export default ButtonCv;

import React, { FC } from 'react';
import cvButtonS from './CvButton.module.scss';

const ButtonCv: FC = () => {
    return (
        <a className={cvButtonS.linkWrapper} download href={'download/front_resume.pdf'}>
            <div className={cvButtonS.cvButtonWrapper}>
                <span>CV</span>
                <span>+</span>
            </div>
        </a>
    );
};

export default ButtonCv;

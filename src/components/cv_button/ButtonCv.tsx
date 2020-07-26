import React, { FC } from 'react';
import cvButtonS from './CvButton.module.scss';
import styled from 'styled-components';
import { ButtonCVPropsI, StyledButtonPropsI } from '../../interfaces/mainPageInterfaces';

const StyledButton = styled.div<StyledButtonPropsI>`
    @media (max-width: 768px) {
        &:after {
            content: '${({ mobileCV }) => mobileCV}';
        }
    }
`;

const ButtonCv: FC<ButtonCVPropsI> = ({ desktopCV, mobileCV }: ButtonCVPropsI) => {
    return (
        <a className={cvButtonS.linkWrapper} download href={'download/front_resume.pdf'}>
            <StyledButton mobileCV={mobileCV} className={cvButtonS.cvButtonWrapper}>
                <span>{desktopCV}</span>
                <span>+</span>
            </StyledButton>
        </a>
    );
};

export default ButtonCv;

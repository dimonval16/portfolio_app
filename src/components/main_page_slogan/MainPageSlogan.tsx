import React, { FC } from 'react';
import styled from 'styled-components';
import sloganS from './MainPageSlogan.module.scss';
import { SloganPropsI, StyledSloganUnderlineI } from '../../interfaces/mainPageInterfaces';

const StyledTextBlock = styled.div`
    color: ${({ color }) => color};
`;

const StyledUnderline = styled.div<StyledSloganUnderlineI>`
    background-color: ${({ bgColor }) => bgColor};
`;

const MainPageSlogan: FC<SloganPropsI> = ({ sloganData, themeMode }: SloganPropsI) => {
    return (
        <section className={sloganS.sloganWrapper}>
            <StyledTextBlock className={sloganS.greeting} color={themeMode.primaryTextColor}>
                <span>{sloganData.greeting}</span>
                <br />
                <span>{sloganData.lastName}</span>
                <StyledUnderline className={sloganS.line} bgColor={themeMode.primaryBlockColor} />
            </StyledTextBlock>
            <StyledTextBlock className={sloganS.profession} color={themeMode.professionTextColor}>
                {sloganData.profession}
            </StyledTextBlock>
        </section>
    );
};

export default MainPageSlogan;

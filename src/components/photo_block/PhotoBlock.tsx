import React, { FC } from 'react';
import styled from 'styled-components';
import photoS from './PhotoBlock.module.scss';
import { PhotoBlockPropsI, StyledImageI } from '../../interfaces/mainPageInterfaces';

const StyledImage = styled.div<StyledImageI>`
    background-image: url(${({ colorsType }) =>
        colorsType === 'light' ? 'img/photo_block_light.png' : 'img/photo_block_dark.png'});
`;

const PhotoBlock: FC<PhotoBlockPropsI> = ({ themeMode }: PhotoBlockPropsI) => {
    return (
        <section>
            <StyledImage className={photoS.image} colorsType={themeMode} />
        </section>
    );
};

export default PhotoBlock;

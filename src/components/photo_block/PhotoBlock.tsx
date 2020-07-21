import React, { FC } from 'react';
import photoS from './PhotoBlock.module.scss';

const PhotoBlock: FC = () => {
    return (
        <section>
            <div className={photoS.image} />
        </section>
    );
};

export default PhotoBlock;

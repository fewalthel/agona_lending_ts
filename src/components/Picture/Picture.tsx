import React from 'react';

import {IPicture} from './pictures.ts';

export const Picture: React.FC<IPicture> = ({ largePath, mediumPath, smallPath, defaultPath, alt, className }: IPicture) => {
    return (
        <picture>
            {largePath && (<source className={className} media="(min-width: 1440px)" srcSet={largePath} />)}
            {mediumPath && (<source className={className} media="(min-width: 1024px)" srcSet={mediumPath} />)}
            {smallPath && (<source className={className} media="(min-width: 414px)" srcSet={smallPath} />)}
            <img className={className} src={defaultPath} alt={alt} />
        </picture>
    )
}
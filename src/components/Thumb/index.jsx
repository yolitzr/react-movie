import React from 'react';
//Styles
import { Image } from './Thumb.styles';

export function Thumb( { image, movieID, clickable } ) {
    return (
        <div>
            <Image src={image} alt="movie-thumb" />
        </div>
    )
}
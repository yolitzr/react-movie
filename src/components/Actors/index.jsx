import React from 'react';
//Styles
import { Wrapper, Image } from './Actors.styles'

export function Actors({ name, character, imageUrl }) {
    return (
        <Wrapper>
            <Image  src={imageUrl} />
            <h3>{name}</h3>
            <p>{character}</p>
        </Wrapper>
    )
}
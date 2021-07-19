import React from 'react';
import { useParams } from 'react-router-dom';
// Config 
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config'
//Components
import { Grid } from './Grid'
import { Spinner } from './Spinner'
// Custmon Hooks
import { useMovieFecth } from '../hooks/useMovieFetch';
//Images
import NoCover from '../assets/img/no_image.jpg';

export function Movie() {
    const { movieSlug } = useParams(); // Mismo nombre asignado en el custom hook

    const { movie, loading, error } = useMovieFecth(movieSlug);

    console.log(movie)

    return (
        <>
            <div>Movie</div>
        </>
    )
}
import React from 'react';
import { useParams } from 'react-router-dom';
// Config 
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config'
//Components
import { Grid } from './Grid'
import Spinner from './Spinner'
import { BreadCrumb } from './BreadCrumb';
import { MovieInfo } from './MovieInfo';
// Custmon Hooks
import { useMovieFecth } from '../hooks/useMovieFetch';
//Images
import NoCover from '../assets/img/no_image.jpg';

export function Movie() {
    const { movieSlug } = useParams(); // Mismo nombre asignado en el custom hook

    const { movie, loading, error } = useMovieFecth(movieSlug);

    if (loading) return <Spinner />;
    if (error) return <div>Something went wrong</div>;

    console.log(movie)

    return (
		<>
			<BreadCrumb movieTitle={movie.title} />
			<MovieInfo data={movie} />
		</>
	);
}
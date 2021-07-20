import React from 'react';
import { useParams } from 'react-router-dom';
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
//Components
import { Grid } from './Grid';
import Spinner from './Spinner';
import { BreadCrumb } from './BreadCrumb';
import { MovieInfo } from './MovieInfo';
import { MovieInfoBar } from './MovieInfoBar';
import { Actors } from './Actors';
// Custmon Hooks
import { useMovieFecth } from '../hooks/useMovieFetch';
//Images
import NoCover from '../assets/img/no_image.jpg';

export function Movie() {
	const { movieSlug } = useParams(); // Mismo nombre asignado en el custom hook

	const { movie, loading, error } = useMovieFecth(movieSlug);

	if (loading) return <Spinner />;
	if (error) return <div>Something went wrong</div>;

	console.log(movie);

	return (
		<>
			<BreadCrumb movieTitle={movie.title} />
			<MovieInfo data={movie} />
			<MovieInfoBar 
				time={movie.runtime}
				budget={movie.budget}
				revenue={movie.revenue} 
			/>
			<Grid header='Actors'>
				{movie.actors.map(actor => (
					<Actors 
						key={actor.id}
						name={actor.name}
						character={actor.character}
						imageUrl={actor.profile_path
							? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
							: NoCover
						} 
					/>
				))}
			</Grid>
		</>
	);
}

import React from 'react';
//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
//Components
import { Hero } from './Hero'
import { Grid } from './Grid';
import { Thumb } from './Thumb';
import Spinner from './Spinner';
import { SeacrhBar } from './SearchBar';
import { Button } from './Button'
//Custmon Hooks
import { useHomeFetch } from '../hooks/useHomeFetch';
//Images
import NoCover from '../assets/img/no_image.jpg';

export function Home() {
	const { movieData, error, loading, search, setSearch, setIsLoadingMore } = useHomeFetch();

	if(error) return <div>Something went wrong...</div>;

	return (
		<>
			{!search && movieData.results[0] ? (
				<Hero
					image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movieData.results[0].backdrop_path}`}
					title={movieData.results[0].original_title}
					text={movieData.results[0].overview}
				/>
			) : null}

			<SeacrhBar setSearchTerm={setSearch} />

			<Grid header={search ? 'Search Result' : 'Popular Movies'}>
				{movieData.results.map((movie) => (
					<Thumb
						key={movie.id}
						clickable
						image={
							movie.poster_path
								? IMAGE_BASE_URL +
								  POSTER_SIZE +
								  movie.poster_path
								: NoCover
						}
						movieSlug={movie.title}
					/>
				))}
			</Grid>
			{movieData.page < movieData.total_pages && !loading && (
				<Button
					text="Load More"
					callback={() => setIsLoadingMore(true)}
				/>
			)}
			{loading && <Spinner />}
		</>
	);
}
   
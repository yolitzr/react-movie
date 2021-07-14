import React, { useState, useEffect } from 'react';
//Config
import { BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
//Components
import { Hero } from './Hero'
//Custmon Hooks
import { useHomeFetch } from '../hooks/useHomeFetch';
//Images
// import NoCover from '../assets/img/no_image.jpg ';
// import { ConsoleWriter } from 'istanbul-lib-report';

export function Home() {
	const { movieData } = useHomeFetch();
	console.log(movieData);

	return (
		<>
			{movieData.results[0] ? (
				<Hero
					image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movieData.results[0].backdrop_path}`}
                    title={movieData.results[0].original_title}
                    text={movieData.results[0].overview}
				/>
			) : null}
		</>
	);
}
 
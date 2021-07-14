import React, { useState, useEffect } from 'react';
//Config
// import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
//API
import API from '../API.js'
// Components

//Hooks

//Images
// import NoCover from '../assets/img/no_image.jpg ';
// import { ConsoleWriter } from 'istanbul-lib-report';

export function Home() {
	//useState
	const [movieData, setmovieData] = useState();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const fetchMovies = async (page, searchTerm = '') => {
		try {
			setError(false);
			setLoading(true);

			const movies = await API.fetchMovies(searchTerm, page);

            setmovieData((prevState) => ({
				...movies,
				results:
					page > 1
						? [...prevState.results, ...movies.results]
						: [...movies.results],
			}));
		} catch (error) {
			setError(true);
		}

        setLoading(false);
	};

	//useEffect - Initial render
    useEffect(() => {
        fetchMovies(1)
    }, [])

    console.log(movieData);
    console.log(loading);
    console.log(error);



	return <div>Home Page</div>;
}
 
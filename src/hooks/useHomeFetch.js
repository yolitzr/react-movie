import { useState, useEffect, useRef } from "react";
//API
import API from '../API.js';

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
};

export function useHomeFetch() {
    //useRef

	//useState
	const [movieData, setmovieData] = useState(initialState);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [ search, setSearch ]= useState('');

	console.log(search)

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
		fetchMovies(1);
	}, []);

    return { movieData, loading, error, setSearch };
};

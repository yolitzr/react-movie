import { useState, useEffect, useRef } from "react";
//API
import API from '../API.js';
//Helpers
import { isPersistedState } from "../helpers.js";

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
	const [isLoadingMore, setIsLoadingMore] = useState(false);

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

	//useEffect - Initial render and search
	useEffect(() => {
		if (!search) {
			const sessionState = isPersistedState('homeState');

			if (sessionState) {
				setmovieData(sessionState);
				return;
			}
		}
		setmovieData(initialState); // Initial state before make a new search. (It always goes before the search or fetch). This show all the movies again.
		fetchMovies(1, search); //1 = Inicio en la pagina 1
	}, [search]);

	//Load More
	useEffect(() => {
		if (!isLoadingMore) return; //Return if no more data is being loaded.

		fetchMovies(movieData.page + 1, search); 
		setIsLoadingMore(false);
	}, [isLoadingMore, search, movieData.page]);

	//Write to sessionStorage
	useEffect(() => {
		if(!search) sessionStorage.setItem('homeState', JSON.stringify(movieData))
	}, [search, movieData])

    return { movieData, loading, error, search, setSearch,  setIsLoadingMore };
};

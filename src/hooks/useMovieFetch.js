import { useState, useEffect, useCallback } from 'react';
// API
import API from '../API.js'

export function useMovieFecth(movieSlug) {
	//useState
	const [movie, setMovie] = useState({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

    //Info de API
    const fetchData = useCallback(async () => {
		try {
			setLoading(true);
			setError(false);

			const singleMovie = await API.fetchMovie(movieSlug);
			const credits = await API.fetchCredits(movieSlug);

			//Get Directors Only
			const directors = credits.crew.filter(
				(member) => member.job === 'Director'
			);

			setMovie({
				...singleMovie,
				actors: credits.cast,
				directors,
			});

			setLoading(false);
		} catch (error) {
			setError(true);
		}
	}, [movieSlug]);

    //useEffect (When the component mounts)
    useEffect(() => {
		fetchData();
	}, [movieSlug, fetchData]);

    return { movie, loading, error }
}

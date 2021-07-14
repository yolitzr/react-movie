import React, { useState, useEffect } from 'react';
//Config
// import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

//Custmon Hooks
import { useHomeFetch } from '../hooks/useHomeFetch';
//Images
// import NoCover from '../assets/img/no_image.jpg ';
// import { ConsoleWriter } from 'istanbul-lib-report';

export function Home() {
 const { movieData, loading, error } = useHomeFetch();

    console.log(movieData)

	return <div>Home Page</div>;
}
 
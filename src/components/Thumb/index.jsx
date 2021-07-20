import React from 'react';
import PropTypes from 'prop-types';
// Route
import { Link } from 'react-router-dom'
//Styles
import { Image } from './Thumb.styles';

export function Thumb({ image, movieSlug, clickable }) {
	return (
		<div>
			{clickable ? (
				<Link to={`/${movieSlug}`}>
					<Image src={image} alt="movie-thumb" />
				</Link>
			) : (
				<Image src={image} alt="movie-thumb" />
			)}
		</div>
	);
}

Thumb.propTypes = {
	image: PropTypes.string,
	movieSlug: PropTypes.number,
	clickable: PropTypes.bool,
}
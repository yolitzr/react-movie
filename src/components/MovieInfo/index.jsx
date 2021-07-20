import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { Wrapper, Content, Text } from './MovieInfo.styles';
// Components
import { Thumb } from '../Thumb';
//Config    
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
//Image
import NoCover from '../../assets/img/no_image.jpg'

export function MovieInfo({ data }) {
    return (
		<Wrapper backdrop={data.backdrop_path}>
			<Content>
				<Thumb
					image={
						data.poster_path
							? `${IMAGE_BASE_URL}${POSTER_SIZE}${data.poster_path}`
							: NoCover
					}
					clickable={false}
					alt="movie-thumb"
				/>
				<Text>
					<h2>{data.title}</h2>
					<h4>PLOT</h4>
					<p>{data.overview}</p>
					<div className="rating-directors">
						<div>
							<h4>RATING</h4>
							<span className="score">{data.vote_average}</span>
						</div>
						<div className="director">
							<h4>
								DIRECTOR{data.directors.lengtg > 1 ? 'S' : ''}
							</h4>
							{data.directors.map((director) => (
								<p key={director.id}>
                                    {director.name}
                                </p>
							))}
						</div>
					</div>
				</Text>
			</Content>
		</Wrapper>
	);
}

MovieInfo.propTypes = {
	data: PropTypes.object,
}

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//API
import API from '../../API'
//Styles
import { Wrapper, Content, Text } from './MovieInfo.styles';
// Components
import { Thumb } from '../Thumb';
import { Rate } from '../Rate'
//Config    
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
//Image
import NoCover from '../../assets/img/no_image.jpg'
//Context
import { Context } from '../../context'

export function MovieInfo({ data }) {
	const [user] = useContext(Context);

	const handleRating = async value =>  {
		const rate = await API.rateMovie(user.sessionId, data.id, value);

		console.log(rate)
	}

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
								<p key={director.credit_id}>
                                    {director.name}
                                </p>
							))}
						</div>
					</div>
					{user && 
						(<div>
							<p>Rate Movie</p>
							<Rate callback={handleRating} />
						</div>)
					}
				</Text>
			</Content>
		</Wrapper>
	);
}

MovieInfo.propTypes = {
	data: PropTypes.object,
}

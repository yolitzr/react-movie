import React from 'react'
import PropTypes from 'prop-types'
//Styles
import { Wrapper, Content, Text } from './Hero.styles'

export function Hero({ image, title, text }) {
	return (
		<Wrapper image={image}>
			<Content>
				<Text>
					<h1>{title}</h1>
					<p>{text}</p>
				</Text>
			</Content>
		</Wrapper>
	);
}

Hero.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string,
}
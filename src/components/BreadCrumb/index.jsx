import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import { Wrapper, Content } from './BreadCrumb.styles';

export function BreadCrumb({ movieTitle }) {
    return (
		<Wrapper>
			<Content>
				<Link to="/">
					<span>Home</span>
				</Link>
				<span>|</span>
				<h3>{movieTitle}</h3>
			</Content>
		</Wrapper>
	);
}
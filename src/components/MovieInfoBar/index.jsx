import React from 'react'
import PropTypes from 'prop-types';
// Helpers
import { calcTime, convertMoney } from '../../helpers';
//Styles
import { Wrapper, Content } from './MovieInfoBar.styles';

export function MovieInfoBar({ time, budget, revenue }) {
    return (
		<Wrapper>
			<Content>
				<div className="column">
					<p>Running time: {calcTime(time)}</p>
				</div>
				<div className="column">
					<p>Running Budget: {convertMoney(budget)}</p>
				</div>
				<div className="column">
					<p>Revenue: {convertMoney(revenue)}</p>
				</div>
			</Content>
		</Wrapper>
	);
}

MovieInfoBar.propTypes = {
	time: PropTypes.number,
	budget: PropTypes.number,
	revenue: PropTypes.number,
}

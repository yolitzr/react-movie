import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//Images
import searchIcon from '../../assets/img/search-icon.svg';
//Styles
import { Wrapper, Content } from './SearchBar.styles';

export function SearchBar({ setSearchTerm }) {
    //useState
    const [searchState, setSearchState] = useState('');
    //useRef
    const initial = useRef(true); 

    //useEffect
    useEffect(() => {
        if(initial.current) {
            initial.current = false;
            return;
        }

		const timer = setTimeout(() => {
			setSearchTerm(searchState);
		}, 500);

        return () => clearTimeout(timer)
	}, [setSearchTerm, searchState]);

    return (
		<Wrapper>
			<Content>
				<img src={searchIcon} alt="search-icon" />
				<input
					type="text"
					placeholder="Seacrh Movie"
					onChange={(event) =>
						setSearchState(event.currentTarget.value)
					}
					value={searchState}
				/>
			</Content>
		</Wrapper>
	);
}

SearchBar.propTypes = {
	setSearchTerm: PropTypes.func,
}
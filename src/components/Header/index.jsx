import React, { useContext } from 'react';
// Route
import { Link } from 'react-router-dom'
//Images
import RMDBLogo from '../../assets/img/react-movie-logo.svg'
import TMDBLogo from '../../assets/img/tmdb_logo.svg'
//Styles
import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';
// Context
import { Context } from '../../context'

export function Header() {
    const [user] = useContext(Context);

    return (
		<Wrapper>
			<Content>
				<Link to="/">
					<LogoImg src={RMDBLogo} alt="rmdb-logo" />
				</Link>
				{user ? (
					<span>
						Logged in as: {user.username}
					</span>
				) : (
					<Link to="/login">
                        <span>Log in</span>
                    </Link>
				)}
				<TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
			</Content>
		</Wrapper>
	);
};

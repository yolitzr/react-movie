import React from 'react';
// Route
import { Link } from 'react-router-dom'
//Images
import RMDBLogo from '../../assets/img/react-movie-logo.svg'
import TMDBLogo from '../../assets/img/tmdb_logo.svg'
//Styles
import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';

export function Header() {
    return (
        <Wrapper>
            <Content>
                <Link to='/'>
                    <LogoImg src={RMDBLogo} alt="rmdb-logo"/>
                </Link>
                <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo"/>
            </Content>
        </Wrapper>
    )
};

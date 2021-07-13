import React from 'react';
//Images
import RMDBLogo from '../../assets/img/react-movie-logo.svg'
import TMDBLogo from '../../assets/img/tmdb_logo.svg'
//Styles
import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';


export function Header() {
    return (
        <Wrapper>
            <Content>
                <LogoImg src={RMDBLogo} alt="rmdb-logo"/>
                <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo"/>
            </Content>
        </Wrapper>
    )
};

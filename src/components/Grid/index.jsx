import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { Wrapper, Content } from './Grid.styles';

export function Grid({ header, children }) {
    return (
        <Wrapper>
            <h2>{header}</h2>
            <Content>  
                {children}
            </Content>
        </Wrapper>
    )
}

Grid.propTypes = {
    header: PropTypes.string,
}
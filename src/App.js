import React from 'react';
//Styles
import { GlobalStyle } from './GlobalStyle'
//Components
import { Header } from './components/Header'

function App() {
    return (
        <div className="App">
            <Header />
            <GlobalStyle />
        </div>
    );
}

export default App;

import React, { useState, useContext } from 'react';
//Navegation
import { useNavigate } from 'react-router-dom';
//API
import API from '../API'
//Componentes
import { Button } from './Button'
//Styles
import { Wrapper } from './Login.styles'
//Context
import { Context } from '../context'

export function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    //Context
    const [_userLogin, setUserLogin] = useContext(Context);

    //Hook Navegation
    const navigate = useNavigate();
    
    //Input
    const handleInput = e => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;

        if (name === 'username') setUsername(value);
        if (name === 'password') setPassword(value);

    }
    //Submit
    const handleSubmit = async () => {
        setError(false);
        try {
            const requestToken = await API.getRequestToken();
            const sessionId = await API.authenticate(
				requestToken,
				username,
				password,
			);
            setUserLogin({ sessionId: sessionId.session_id, username });

            navigate('/');

        } catch(error) {
            setError(true)
        }
    };


    return (
		<Wrapper>
			{error && <div className="error">There was an error!</div>}
			<div className="form">
				<label>Username:</label>
				<input
					placeholder="Enter your username"
					type="text"
					value={username}
					name="username"
					onChange={handleInput}
				/>
			</div>
			<div className="form">
				<label>Password:</label>
				<input
					placeholder="Enter your password"
					type="password"
					value={password}
					name="password"
					onChange={handleInput}
				/>
			</div>
			<Button text="Login" callback={handleSubmit} />
		</Wrapper>
	);
}
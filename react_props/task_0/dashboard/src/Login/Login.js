import React from 'react';
import './Login.css';

function Login() {
    return (
        <>
            <main className="App-body">
                <p>Login to access the full dashboard</p>
                <label>Email:</label>
                <input type='text'></input>
                <label>Password:</label>
                <input type='password'></input>
                <button type="button">OK</button>
            </main>
        </>
    );
}

export default Login;
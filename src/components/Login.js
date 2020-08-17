import React from 'react';
import './style/Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from '../Firebase';

const Login = () => {
    const signIn = () => {
        //e.preventDefault();
        auth
            .signInWithPopup(provider)
                .then((result) => {
                    console.log(result);
                })
                    .catch((error) => {
                        alert(error.message);
                    });
    };

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt="Slack Logo" />
                <h1>Sign In to &lt; RunTime Error / &gt; </h1>
                <p>RuntimeError.Slack.com</p>
                <Button onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login;

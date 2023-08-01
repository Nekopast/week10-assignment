import React from "react";
import { loginUser } from '../../utils';
import './loginsignin.css';
import { useState } from 'react';
import Logout from "./logout";

const Login = ({newUser}, props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedin, setIsLoggedin] = useState(false);
 
    const login = async (e) => {
        e.preventDefault();
        console.log(username, email, password);
        await loginUser(username, email, password, newUser)
        setIsLoggedin(true);
        window.location.href = "/to-do-app";
    };

    return (
        <div className="loginDiv">
            <h1 className="loginTitle">Login </h1>
            {!isLoggedin ? (
                <>
                    <form action="">
                        <input
                            className="textInput"
                            type="text"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            placeholder="Username"
                        />
                        <br  />
                        <input
                            type="email"
                            className="textInput"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            placeholder="Email"
                        />
                        <br  />
                        <input
                            type="password"
                            className="textInput"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            placeholder="Password"
                        />
                        <br  />
                        <button className="btn" type="submit" onClick={login}>
                            GO
                        </button>
                    </form>
                </>
            ) : (
                <>
                    <h2 className="loggedIn">User is logged in</h2>
                    <Logout cookie={props.cookie} setIsLoggedin={setIsLoggedin} />                     
                </>
            )}
        </div>
    );
}
 
export default Login;
import React from "react"
import { useState } from "react"
import { registerUser } from "../../utils"
import "./loginsignin.css";

const Register = () => {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const submitHandler = async (e) => {
        e.preventDefault()
       
        console.log(username)
        console.log(email)
        console.log(password)

        // registerUser - from the utils folder
        // The function which makes the request to the BE

        await registerUser(username, email, password)
    }

    return (
        <div className="registerDiv">
            <h1 className="registerTitle">Register:</h1>
            <form onSubmit={submitHandler}>
                <placeholder>Username:
                    <input className="textInput"  onChange={(e) => setUsername(e.target.value)} required></input>
                </placeholder>
                <br></br>
                <label>Email:
                    <input  className="textInput" onChange={(e) => setEmail(e.target.value)} required></input>
                </label>
                <br></br>
                <label>Password:
                    <input  className="textInput" type="password" onChange={(e) => setPassword(e.target.value)} required></input>
                </label>
                <br></br>
                <button  className="btn" type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register;
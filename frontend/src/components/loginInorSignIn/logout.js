import React from "react";
import "./loginsignin.css";

const Logout = (props) => {

        props.e.preventDefault();
        const logout = async () => {
            localStorage.removeItem(props.cookie)
            props.setIsLoggedin(false)
            window.location.href = "/";
        };
        
        return (
        <div className="logoutDiv">
            <button className="btn" onClick={ () => logout()}>logout user</button>
        </div>
        )
    };

export default Logout;
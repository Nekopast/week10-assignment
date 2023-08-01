import { writeCookie } from "../common";

export const registerUser = async (username, email, password, newUser) => {
    try {
        const response = await fetch("http://localhost:5001/users/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                "username": username,
                "email": email,
                "password": password
            })
        })
        const data = await response.json()
        console.log("Data returned from BE - ", data)
    } catch (error) {
        console.log(error)
    }
};


export const loginUser = async (username, email, password, newUser) => {
       try {
        const response = await fetch("http://localhost:5001/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                "username": username,
                "email": email,
                "password": password
            })
        })
        const data = await response.json()
        console.log("Data returned from BE - ", data)
        newUser(data.user.username)
        writeCookie("jwt_token", data.user.token, 7)
    } catch (error) {
        console.log(error)
    }
};


import React from "react";
import Register from "./register";
import Login from "./login";
import "./loginsignin.css";


const Loginsignin = (props) => {

    return (
      <div className="lisi">

      <Register  />
      <Login cookie={props.cookie} />
      </div>
    );
  }


export default Loginsignin;
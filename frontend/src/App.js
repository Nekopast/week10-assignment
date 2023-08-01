import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getCookie } from './common';
import { useEffect, useState } from "react";
import LoggedIn from './components/loggedIn/loggedIn';
import Loginsignin from './components/loginInorSignIn/loginsignin';
import Footer from './components/footer';
import Header from './components/header';

const App = () => {

  const [cookie, setCookie] = useState()
  useEffect (() => {
    let cookie = getCookie("jwt_token")
    console.log("******cookie =", cookie)
    setCookie(cookie)
  })

  return (

    <div>
      
      <BrowserRouter>
      <Header  />
      <Loginsignin cookie={cookie}/>
          <Routes>
            <Route path="/to-do-app" element={ <LoggedIn />} />
          </Routes>
      <Footer />
        </BrowserRouter>
      
    </div>
 ); 
}; 

export default App;

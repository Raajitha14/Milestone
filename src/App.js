import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Destination from "./Components/Contact";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from './Components/NavBar';


function App(){
  return(
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/destination" element={<Destination/>}/>
      </Routes>
      </BrowserRouter>
    </>

  ); 
}
export default App;
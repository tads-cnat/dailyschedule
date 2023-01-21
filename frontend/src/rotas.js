import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./components/Home/HomePage/Home";
import CriarCrono from "./components/CriarCronograma/index.js";
import Login from "./components/Login/index.js"
//importa a rota

const Rotas = () => {
   return(
      <Router>
         <Routes>
            <Route path="/"  element = { <Home />} />
            <Route element = { <CriarCrono /> }  path="/criar-cronograma" />
            <Route path="/login" element={ <Login/> }/>
         </Routes>
      </Router>
   )
}

export default Rotas;
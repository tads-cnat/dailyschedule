import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./components/Home/HomePage/Home";
import CriarCrono from "./components/CriarCronograma/index.js";
import Visualizar from "./components/VisualizarCronograma/index.js";
import Login from "./components/Login/index.js"
import Editar from "./components/Editar/index.js"
import Buscar from "./components/Busca/Buscar.js"
//importa a rota

const Rotas = () => {
   return(
      <Router>
         <Routes>
            <Route path="/"  element = { <Home />} />
            <Route path="/criar-cronograma" element = { <CriarCrono /> }  />
            <Route path="/cronograma" element = { <Visualizar /> }  />
            <Route path="/login" element={ <Login/> }/>
            <Route path="/cronograma/:id" element={ <Editar/> }/>
            <Route path="/buscar" element={ <Buscar/> }/>
         </Routes>
      </Router>
   )
}

export default Rotas;
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./components/Home/HomePage/Home";
import CriarCrono from "./components/CriarCronograma/index.js";
import Editar from "./components/Editar/index.js";

import Buscar from "./components/Busca/Buscar.js";
import Login from "./components/Login/index.js";
import Cadastro from "./components/Cadastro/index.js";
import MeusCrogramas from './components/MeusCronogramas/MeusCronogramas';
import Visualizar from "./components/Visualizar/index.js";
import Tarefa from "./components/Editar/tarefa.js";
import Perfil from "./components/Perfil/Perfil";

const Rotas = () => {
   return(
      <Router>
         <Routes>
            <Route path="/"  element = { <Home />} />
            <Route path="/criar-cronograma" element = { <CriarCrono /> }  />
            <Route path="/login" element={ <Login/> }/>            
            <Route path="/buscar" element={ <Buscar/> }/>
            <Route path="/cadastro" element={ <Cadastro/> }/>
            <Route path="/MeusCronogramas" element={<MeusCrogramas />}> </Route>
            <Route path="/Editar/:id" element={<Editar />} />
            <Route path="/Editar/:idCronograma/Tarefa/:idTarefa" element={<Tarefa />}/>                        
            <Route path="/Visualizar/:id" element={<Visualizar />}/>
            <Route path="/Perfil" element={<Perfil />} />
         </Routes>
      </Router>
   )
}

export default Rotas;

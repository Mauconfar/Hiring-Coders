import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Repositories from "./pages/Repositories"; //importando que será chamado

//Switch é um container que guarda as rotas, ele quem define a troca de rotas.
// Cada rota vai ter um "path" e um componente que ela chamará.

export default function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Repositories" element={<Repositories />} />
      </Routes>
    </BrowserRouter>
  )
}
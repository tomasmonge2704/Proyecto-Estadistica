import * as React from 'react';
import ConfianzaInicio from './componentes/IntervaloDeConfianza/inicio';
import InicioProbabilidad from './componentes/Probabilidad/inicio';
import InicioHipotesis from './componentes/Hipotesis/inicio';
import Inicio from './componentes/Home/inicio';
import './App.css';
import { NextUIProvider } from '@nextui-org/react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <NextUIProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Inicio/>} />
          <Route exact path="/confianza" element={<ConfianzaInicio page="/confianza"/>} />
          <Route exact path="/probabilidad" element={<InicioProbabilidad page="/probabilidad"/>} />
          <Route exact path="/hipotesis" element={<InicioHipotesis page="/hipotesis"/>} />
        </Routes>
      </BrowserRouter>
    </NextUIProvider>

  );
}

export default App;

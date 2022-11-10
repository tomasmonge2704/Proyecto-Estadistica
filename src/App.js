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
  sessionStorage.setItem('datos', JSON.stringify({}));
  return (
    <NextUIProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Inicio/>} />
          <Route exact path="/confianza" element={<ConfianzaInicio/>} />
          <Route exact path="/probabilidad" element={<InicioProbabilidad/>} />
          <Route exact path="/hipotesis" element={<InicioHipotesis/>} />

        </Routes>
      </BrowserRouter>
    </NextUIProvider>

  );
}

export default App;

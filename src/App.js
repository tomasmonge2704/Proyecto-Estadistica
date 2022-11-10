import * as React from 'react';
import ConfianzaInicio from './componentes/IntervaloDeConfianza/inicio';
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
        </Routes>
      </BrowserRouter>
    </NextUIProvider>

  );
}

export default App;

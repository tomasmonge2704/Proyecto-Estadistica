import * as React from 'react';
import ConfianzaInicio from './componentes/IntervaloDeConfianza/inicio';
import InicioProbabilidad from './componentes/Probabilidad/inicio';
import InicioHipotesis from './componentes/Hipotesis/inicio';
import Inicio from './componentes/Home/inicio';
import './App.css';
import { NextUIProvider, createTheme } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const lightTheme = createTheme({
    type: 'light'
  })

  const darkTheme = createTheme({
    type: 'dark',
    theme: {
      colors: {backgroundContrast: '#070606'}
    }
  })
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className
      }}
    >
      <NextUIProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Inicio />} />
            <Route exact path="/confianza" element={<ConfianzaInicio page="/confianza" />} />
            <Route exact path="/probabilidad" element={<InicioProbabilidad page="/probabilidad" />} />
            <Route exact path="/hipotesis" element={<InicioHipotesis page="/hipotesis" />} />
          </Routes>
        </BrowserRouter>
      </NextUIProvider>
    </NextThemesProvider >
  );
}

export default App;

import * as React from 'react';
import Inicio from './componentes/Home/inicio';
import Register from './componentes/Registro/register';
import './App.css';
import { NextUIProvider } from '@nextui-org/react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './componentes/login/login';
function App() {
  sessionStorage.setItem('datos', JSON.stringify({}));
  return (
    <NextUIProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
          <Inicio/>
          } />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<>
          <Register/>
          </>} />
        </Routes>
      </BrowserRouter>
    </NextUIProvider>

  );
}

export default App;

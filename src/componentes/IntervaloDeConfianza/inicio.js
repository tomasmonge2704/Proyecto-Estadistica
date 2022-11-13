import ModalTipoDeEstimacion from './modal/modalTipoEstimacion';
import React from 'react';
import NavBar from '../Navbar/Nabvar';
export default function ConfianzaInicio({page}) {
  
  return (
    <>
    <NavBar page={page}/>
    <ModalTipoDeEstimacion/>
    </>
  );
}

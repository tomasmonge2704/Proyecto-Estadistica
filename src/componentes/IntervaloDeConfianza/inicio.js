import GetDatos from './Result/getDatos';
import TablaDatos from './tabla/tablaDatos';
import React from 'react';
import Intervalo_de_confianza from './Intervalo_de_confainza/intervalo_confianza';
import NavBar from '../Navbar/Nabvar';
export default function ConfianzaInicio() {
  const [valores, setValores] = React.useState([]);
  let datos = {}
  window.addEventListener('storage', () => {
    datos = JSON.parse(sessionStorage.getItem('datos'));
    setValores(datos.valores)
  })
  return (
    <>
    <NavBar/>
    <div className="contenedorInicio">
      <Intervalo_de_confianza datos={datos}/>
      <GetDatos/>
    </div>
    {valores.length !== 0 ? (<div className='contenedorTabla'>
    <TablaDatos valores={valores}/>
    </div>) : (<></>)}
    </>
  );
}

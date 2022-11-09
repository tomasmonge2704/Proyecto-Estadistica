import Intervalo_de_confianza from './Intervalo_de_confainza/intervalo_confianza'
import GetDatos from './Result/getDatos';
import TablaDatos from './tabla/tablaDatos';
import React from 'react';
export default function Inicio() {
  const [valores, setValores] = React.useState([]);
  window.addEventListener('storage', () => {
    const datos = JSON.parse(sessionStorage.getItem('datos'));
    setValores(datos.valores)
  })
  return (
    <>
    <div className="contenedorInicio">
      <Intervalo_de_confianza/>
      <GetDatos/>
    </div>
    {valores.length !== 0 ? (<div className='contenedorTabla'>
    <TablaDatos valores={valores}/>
    </div>) : (<></>)}
    </>
  );
}

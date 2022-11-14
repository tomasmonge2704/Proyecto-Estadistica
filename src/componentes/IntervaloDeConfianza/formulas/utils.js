import { jStat as jStat } from 'jstat'

export function obtenerS(xiCuadrado,N,xFija){
   return Math.sqrt(((xiCuadrado/N) - Math.pow(xFija, 2)) * (N/(N - 1)))  
}
export function obtenerDesvioTipicoAmalgamado(datos){
   const termino1 = (datos.N - 1) * datos.varianza;
   const termino2 = (datos.N2 - 1) * datos.varianza2;
   return Math.sqrt(( termino1 + termino2) / (datos.N + datos.N2 -2))  
}
export function obtenerZ(confianza){
   return jStat.normal.inv( 1 - (1 - confianza/100)/2, 0, 1 )
}
export function obtenerXiFija(valores,N){
   let xFija = 0;
   valores.forEach( e => {
      xFija = xFija + Number(e.value)
  });
   return xFija/N
}
export function obtenerXiFija2(valores){
   let xiCuadrado = 0;
   valores.forEach( e => {
      xiCuadrado = Math.pow(Number(e.value),2) + xiCuadrado
  });
   return xiCuadrado
}
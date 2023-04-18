import { jStat as jStat } from 'jstat'
import {obtenerS,obtenerXiFija,obtenerXiFija2} from './utils';
export default function tStudentConCorreccion(datos){
    let xiCuadrado = obtenerXiFija2(datos.valores)
    let xFija;
    if(datos.media){
        xFija = datos.media
    }else{
        xFija = obtenerXiFija(datos.valores,datos.N)
    }
    let S ;
    if(datos.desvio){
        S = datos.desvio
    }else{
        S = obtenerS(xiCuadrado,datos.N,xFija);
    }
    const x = 1 -((1 - (datos.confianza / 100)) / 2)
    const T = jStat.studentt.inv( x, (datos.n - 1) )
    const pasos = [`X̅ - t σ/√n √(N-n/N-1) ≤ μ ≤  X̅ + t σ/√n √(N-n/N-1)`,`${xFija} - ${T.toFixed(4)} σ/√${datos.n} √(${datos.N}-${datos.n}/${datos.N}-1) ≤ μ ≤  ${xFija} + ${T.toFixed(4)} σ/√${datos.n} √(${datos.N}-${datos.n}/${datos.N}-1)`]
    if(S != 0){
        pasos.push(`${xFija} - ${T.toFixed(4)} ${S.toFixed(4)}/√${datos.n} √${((datos.N - datos.n) / (datos.N - 1)).toFixed(4)} ≤ μ ≤  ${xFija} + ${T.toFixed(4)} ${S.toFixed(4)}/√${datos.n} √${((datos.N - datos.n) / (datos.N - 1)).toFixed(4)}`)
    }
    const resultado = {resultado:`${(xFija - T * (S/Math.sqrt(datos.n)) * Math.sqrt((datos.N - datos.n) / (datos.N - 1))).toFixed(4)} ≤ μ ≤ ${(xFija + T * (S/Math.sqrt(datos.n)) * Math.sqrt((datos.N - datos.n) / (datos.N - 1))).toFixed(4)}`,pasos:pasos};
    if(isNaN(S)){
        resultado.resultado = "Faltan Valores para poder Resolver" 
    }
    return resultado
}

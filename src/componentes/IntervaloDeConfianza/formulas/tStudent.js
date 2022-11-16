import { jStat as jStat } from 'jstat'
import {obtenerS,obtenerXiFija,obtenerXiFija2} from './utils';
export default function tStudentResultado(datos){
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
    const T = jStat.studentt.inv( x, (datos.N - 1) )
    const pasos = [`X̅ - t σ/√n  ≤ μ ≤  X̅ + t σ/√n`,`${xFija} - ${T.toFixed(4)} σ/√${datos.N}  ≤ μ ≤  ${xFija} + ${T.toFixed(4)} σ/√${datos.N}`]
    if(S != 0){
        pasos.push(`${xFija} - ${T.toFixed(4)} ${S.toFixed(4)}/√${datos.N}  ≤ μ ≤  ${xFija} + ${T.toFixed(4)} ${S.toFixed(4)}/√${datos.N}`)
    }
    const resultado = {resultado:`${(xFija - T * (S/Math.sqrt(datos.N))).toFixed(4)} ≤ μ ≤ ${(xFija + T * (S/Math.sqrt(datos.N))).toFixed(4)}`,pasos:pasos};
    if(isNaN(S)){
        resultado.resultado = "Faltan Valores para poder Resolver" 
    }
    return resultado
}


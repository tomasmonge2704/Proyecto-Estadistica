import { jStat as jStat } from 'jstat'
import {obtenerS,obtenerXiFija,obtenerXiFija2} from './utils';
export default function tStudentResultado(media,N,valores,confianza){
    let xiCuadrado = obtenerXiFija2(valores)
    let xFija;
    if(media){
        xFija = media
    }else{
        xFija = obtenerXiFija(valores,N)
    }
    const S = obtenerS(xiCuadrado,N,xFija);
    const x = 1 -((1 - (confianza / 100)) / 2)
    const T = jStat.studentt.inv( x, (N - 1) )
    const pasos = [`X̅ - t σ/√n  ≤ μ ≤  X̅ + t σ/√n`,`${xFija} - ${T.toFixed(4)} σ/√${N}  ≤ μ ≤  ${xFija} + ${T.toFixed(4)} σ/√${N}`]
    if(S != 0){
        pasos.push(`${xFija} - ${T.toFixed(4)} ${S.toFixed(4)}/√${N}  ≤ μ ≤  ${xFija} + ${T.toFixed(4)} ${S.toFixed(4)}/√${N}`)
    }
    const resultado = {resultado:`${(xFija - T * (S/Math.sqrt(N))).toFixed(4)} ≤ μ ≤ ${(xFija + T * (S/Math.sqrt(N))).toFixed(4)}`,pasos:pasos};
    if(isNaN(S)){
        resultado.resultado = "Faltan Valores para poder Resolver" 
    }
    return resultado
}


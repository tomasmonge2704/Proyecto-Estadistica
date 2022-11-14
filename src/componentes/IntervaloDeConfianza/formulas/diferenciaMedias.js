import { obtenerXiFija,obtenerDesvioTipicoAmalgamado } from "./utils";
import { jStat as jStat } from 'jstat'

export default function diferenciaMedias(datos){
    let Sa = obtenerDesvioTipicoAmalgamado(datos);
    const x = 1 -((1 - (datos.confianza / 100)) / 2)
    const T = jStat.studentt.inv( x, (datos.N + datos.N2 - 2) )
    let pasos = ["(X̅1-X̅2) - t Sa √(1/n1 + 1/n2) ≤ μ1 - μ2 ≤ (X̅1-X̅2) + t Sa √(1/n1 + 1/n2)"
    ,`(${datos.media}-${datos.media2}) - ${T.toFixed(4)} ${Sa.toFixed(4)} √(1/${datos.N} + 1/${datos.N2}) ≤ μ1 - μ2 ≤ (${datos.media}-${datos.media2}) + ${T.toFixed(4)} ${Sa.toFixed(4)} √(1/${datos.N} + 1/${datos.N2})`]
    const resultado = {resultado:`${(datos.media - datos.media2) - (T * Sa * Math.sqrt((1/datos.N + 1/datos.N2)))} ≤ μ1 - μ2 ≤ ${(datos.media - datos.media2) + (T * Sa * Math.sqrt((1/datos.N + 1/datos.N2)))}`,pasos:pasos};
    return resultado;
}
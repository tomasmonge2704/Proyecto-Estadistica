import { jStat as jStat } from 'jstat'

export function obtenerEstadisticoT(prob,n){
    prob = 1 - (prob / 2)
    return jStat.studentt.inv( prob, n )
}
export function obtenerConfianzaBeta1(datos,confianza,Z){
    const x = 1 -((1 - (confianza[1] / 100)) / 2)
    const xVieja = 1 -((1 - (confianza[2] / 100)) / 2)
    const T = jStat.studentt.inv( x, (datos.N - 2) )
    const Tvieja = jStat.studentt.inv( xVieja, (datos.N - 2) )
    const A = (Z - datos.beta1) / -Tvieja
    return {inferior:datos.beta1 - T * A,superior:datos.beta1 + T * A}
}
export function obtenerConfianzaBeta0(datos,confianza,Z){
    const x = 1 -((1 - (confianza[2] / 100)) / 2)
    const xVieja = 1 -((1 - (confianza[0] / 100)) / 2)
    const T = jStat.studentt.inv( x, (datos.N - 2) )
    const Tvieja = jStat.studentt.inv( xVieja, (datos.N - 2) )
    const A = (Z - datos.beta0) / -Tvieja
    return {inferior:datos.beta0 - T * A,superior:datos.beta0 + T * A}
}
export function calcularBeta0(intervalo1,intervao2){
    return (intervalo1 + intervao2) / 2
}

import { jStat as jStat } from 'jstat'

export function obtenerEstadisticoT(prob,n){
    prob = 1 - (prob / 2)
    return jStat.studentt.inv( prob, n )
}
export function calcularF(datos){

    }
export function obtenerConfianzaBeta1(datos,confianza1,confianza2,Z){
    const xVieja = 1 -((1 - (confianza1 / 100)) / 2)
    const x = 1 -((1 - (confianza2 / 100)) / 2)
    const T = jStat.studentt.inv( x, (datos.N - 2) )
    const Tvieja = jStat.studentt.inv( xVieja, (datos.N - 2) )
    const A = (Z - datos.beta1) / -Tvieja
    return {inferior:datos.beta1 - T * A,superior:datos.beta1 + T * A}
}
export function obtenerConfianzaBeta0(datos,confianza1,confianza2,Z){
    const xVieja = 1 -((1 - (confianza1 / 100)) / 2)
    const x = 1 -((1 - (confianza2 / 100)) / 2)
    const T = jStat.studentt.inv( x, (datos.N - 2) )
    const Tvieja = jStat.studentt.inv( xVieja, (datos.N - 2) )
    const A = (Z - datos.beta0) / -Tvieja
    return {inferior:datos.beta0 - T * A,superior:datos.beta0 + T * A}
}
export function obtenerConfianzaBeta1SinConfianza(datos){
    const x = 1 -((1 - (datos.intervalos.confianza[0] / 100)) / 2);
    const x1 = 1 -((1 - (datos.intervalos.confianza[1] / 100)) / 2);
    const x2 = 1 -((1 - (datos.intervalos.confianza[2] / 100)) / 2);
    const x3 = 1 -((1 - (datos.intervalos.confianza[3] / 100)) / 2);
    const T = jStat.studentt.inv( x, (datos.N - 2) );
    const T1 = jStat.studentt.inv( x1, (datos.N - 2) );
    const T2 = jStat.studentt.inv( x2, (datos.N - 2) );
    const T3 = jStat.studentt.inv( x3, (datos.N - 2) );
    const A = datos.desvioBeta1;
    return {inferior1:datos.beta1 - T * A,superior1:datos.beta1 + T1 * A,inferior2:datos.beta1 - T2 * A,superior2:datos.beta1 + T3 * A}
}
export function obtenerConfianzaBeta0SinConfianza(datos){
    const x = 1 -((1 - (datos.intervalos.confianza[0] / 100)) / 2);
    const x1 = 1 -((1 - (datos.intervalos.confianza[1] / 100)) / 2);
    const x2 = 1 -((1 - (datos.intervalos.confianza[2] / 100)) / 2);
    const x3 = 1 -((1 - (datos.intervalos.confianza[3] / 100)) / 2);
    const T = jStat.studentt.inv( x, (datos.N - 2) );
    const T1 = jStat.studentt.inv( x1, (datos.N - 2) );
    const T2 = jStat.studentt.inv( x2, (datos.N - 2) );
    const T3 = jStat.studentt.inv( x3, (datos.N - 2) );
    const A = datos.desvioBeta0;
    return {inferior1:datos.beta0 - T * A,superior1:datos.beta0 + T1 * A,inferior2:datos.beta0 - T2 * A,superior2:datos.beta0 + T3 * A}
}
export function calcularBeta0(intervalo1,intervao2){
    return (intervalo1 + intervao2) / 2
}
export function calcularBeta1(intervalo1,intervao2){
    return (intervalo1 + intervao2) / 2
}

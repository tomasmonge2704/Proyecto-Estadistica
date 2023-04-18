import { jStat as jStat } from 'jstat'

export default function mediaPoblacionalFinita_Z(datos){
    const S = datos.desvio
    let Z = 0
    if(datos.confianza !== undefined){
        Z = jStat.normal.inv( 1 - (1 - datos.confianza/100)/2, 0, 1 )
    }
    const pasos = [`X̅ - Z σ/√n √(N-n/N-1) ≤ μ ≤  X̅ + Z σ/√n √(N-n/N-1)`,`${datos.media} - Z σ/√${datos.N} √(${datos.N}-${datos.n}/${datos.N}-1) ≤ μ ≤  ${datos.media} + Z σ/√${datos.N} √(${datos.N}-${datos.n}/${datos.N}-1)`]
    if(Z != 0){
        pasos.push(`${datos.media} - ${Z.toFixed(4)} ${datos.desvio.toFixed(2)}/√${datos.n} √${((datos.N - datos.n) / (datos.N - 1)).toFixed(4)} ≤ μ ≤  ${datos.media} + ${Z.toFixed(4)} ${datos.desvio.toFixed(2)}/√${datos.n} √${((datos.N - datos.n) / (datos.N - 1)).toFixed(4)}`)
    }
    const resultado = {resultado:`${(datos.media - Z * (S/Math.sqrt(datos.n)) * Math.sqrt((datos.N - datos.n) / (datos.N - 1))).toFixed(4)} ≤ μ ≤ ${(datos.media + Z * (S/Math.sqrt(datos.n)) * Math.sqrt((datos.N - datos.n) / (datos.N - 1))).toFixed(4)}`,pasos:pasos};
    return resultado
}
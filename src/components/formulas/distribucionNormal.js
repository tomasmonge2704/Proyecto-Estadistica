import { jStat as jStat } from 'jstat'

export default function DistribucionNormalResultado(media,N,desvio,confianza){
    const S = desvio
    let Z = 0
    if(confianza !== undefined){
        Z = jStat.normal.inv( 1 - (1 - confianza/100)/2, 0, 1 )
    }
    const pasos = [`X̅ - Z σ/√n  ≤ μ ≤  X̅ + Z σ/√n`,`${media} - Z σ/√${N}  ≤ μ ≤  ${media} + Z σ/√${N}`]
    if(Z != 0){
        pasos.push(`${media} - ${Z.toFixed(4)} ${desvio}/√${N}  ≤ μ ≤  ${media} + ${Z.toFixed(4)} ${desvio}/√${N}`)
    }
    const resultado = {resultado:`${(media - Z * (S/Math.sqrt(N))).toFixed(4)} ≤ μ ≤ ${(media + Z * (S/Math.sqrt(N))).toFixed(4)}`,pasos:pasos};
    return resultado
}

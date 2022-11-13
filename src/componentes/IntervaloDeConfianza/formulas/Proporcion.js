const { jStat } = require('jstat')

export default function ProporcionPoblacional(N,R,confianza){
    let pFija = R/N
    let qFija = 1 - pFija
    
    let Z = 0
    if(confianza !== undefined){
        Z = jStat.normal.inv( 1 - (1 - confianza/100)/2, 0, 1 )
    }
    const pasos = [`p - Z √pq/n ≤ P ≤ p + Z √pq/n`,`${pFija} - Z √pq/${N}  ≤ P ≤  ${pFija} + Z √pq/${N}`]
    if(Z != 0){
        pasos.push(`${pFija} - Z √${pFija} x ${qFija} / ${N}  ≤ P ≤  ${pFija} + Z √${pFija} x ${qFija} / ${N}`)
    }
    const resultado = {resultado:`${(pFija - Z * Math.sqrt((pFija * qFija / N))).toFixed(4)} ≤ P ≤ ${(pFija + Z * Math.sqrt((pFija * qFija / N))).toFixed(4)}`,pasos:pasos};
    return resultado
}
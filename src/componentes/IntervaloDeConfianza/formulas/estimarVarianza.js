const { jStat } = require('jstat')

export default function EstimarVarianza (media,N,desvio,valores,confianza){
    const xa = (1 - (confianza / 100)) / 2
    const xb = 1 - ((1 - (confianza / 100)) / 2)
    let xiCuadrado = 0
    let xFija = 0
    valores.forEach( e => {
        xiCuadrado = Math.pow(Number(e.value),2) + xiCuadrado
        xFija = xFija + Number(e.value)
        });
    if(media){
        xFija = media
    }else{
        xFija = xFija/N
    }
    let A = jStat.chisquare.inv( xa, (N - 1) )
    let B = jStat.chisquare.inv( xb, (N - 1) )
    console.log(A)
    console.log(B)
    const S = Math.sqrt(((xiCuadrado/N) - Math.pow(xFija, 2)) * (N/(N - 1)));
    const pasos = ["(n - 1) S² / B ≤ σ² ≤ (n - 1) S² / A",`(${N} - 1) ${S}² / ${B.toFixed(4)} ≤ σ² ≤ (${N} - 1) ${S}² / ${A.toFixed(4)} `]
    const resultado = {resultado:`${(((N-1) * (Math.pow(S,2)) / B)).toFixed(4)} ≤ σ² ≤ ${(((N-1) * (Math.pow(S,2)) / A)).toFixed(4)}`,pasos:pasos};
    return resultado
}
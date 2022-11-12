const { jStat } = require('jstat')

export default function tStudentResultado(media,N,valores,confianza){
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
    const S = Math.sqrt(((xiCuadrado/N) - Math.pow(xFija, 2)) * (N/(N - 1)));
    const x = 1 -((1 - (confianza / 100)) / 2)
    const T = jStat.studentt.inv( x, (N - 1) )
    const pasos = [`X̅ - t σ/√n  <= μ <=  X̅ + t σ/√n`,`${xFija} - ${T.toFixed(4)} σ/√${N}  <= μ <=  ${xFija} + ${T.toFixed(4)} σ/√${N}`]
    if(S != 0){
        pasos.push(`${xFija} - ${T.toFixed(4)} ${S.toFixed(4)}/√${N}  <= μ <=  ${xFija} + ${T.toFixed(4)} ${S.toFixed(4)}/√${N}`)
    }
    const resultado = {resultado:`${(xFija - T * (S/Math.sqrt(N))).toFixed(4)} <= μ <= ${(xFija + T * (S/Math.sqrt(N))).toFixed(4)}`,pasos:pasos};
    if(isNaN(S)){
        resultado.resultado = "Faltan Valores para poder Resolver" 
    }
    return resultado
}


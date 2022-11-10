const { jStat } = require('jstat')

function tStudentResultado(media,N,valores,confianza){
    if(valores == undefined){
        valores = []
    }
    let xiCuadrado = 0
    let xFija = 0
    valores.forEach( e => {
        xiCuadrado = Math.pow(Number(e.value),2) + xiCuadrado
        xFija = xFija + Number(e.value)
        });
    xFija = xFija/N
    const S = Math.sqrt(((xiCuadrado/N) - Math.pow(xFija, 2)) * (N/(N - 1)));
    const x = 1 -((1 - (confianza / 100)) / 2)
    const T = jStat.studentt.inv( x, (N - 1) )
    const pasos = [`X̅ - t σ/√n  <= μ <=  X̅ + t σ/√n`,`${xFija.toFixed(4)} - t σ/√${N}  <= μ <=  ${xFija.toFixed(4)} + t σ/√${N}`]
    if(S != 0){
        pasos.push(`${xFija.toFixed(4)} - ${T.toFixed(4)} ${S.toFixed(4)}/√${N}  <= μ <=  ${xFija.toFixed(4)} + ${T.toFixed(4)} ${S.toFixed(4)}/√${N}`)
    }
    const resultado = {resultado:`${(xFija - T * (S/Math.sqrt(N))).toFixed(4)} <= μ <= ${(xFija + T * (S/Math.sqrt(N))).toFixed(4)}`,pasos:pasos};
    return resultado
}
//`${xFija} - t σ/√${N}  <= μ <=  ${xFija} + t σ/√${N}`
//{"media":"","confianza":"95","desvio":"","N":"9","valores":[{"value":84,"id":1},{"value":88,"id":2},{"value":83,"id":3},{"value":90,"id":4},{"value":87,"id":5},{"value":87,"id":6},{"value":85,"id":7},{"value":88,"id":8},{"value":82,"id":9}]}
export {tStudentResultado}
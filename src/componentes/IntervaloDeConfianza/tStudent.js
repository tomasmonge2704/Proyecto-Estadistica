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
    const T = 2.306
    const resultado = `${xFija - T * (S/Math.sqrt(N))} <= μ <= ${xFija + T * (S/Math.sqrt(N))}`;
    return resultado
}
function tStudentFormula(media,N){
    return `${media} - t σ/√${N}  <= μ <=  ${media} + t σ/√${N}`
}
//{"media":"","desvio":"","N":"9","valores":[{"value":84,"id":1},{"value":88,"id":2},{"value":83,"id":3},{"value":90,"id":4},{"value":87,"id":5},{"value":87,"id":6},{"value":85,"id":7},{"value":88,"id":8},{"value":82,"id":9}]}
export {tStudentResultado,tStudentFormula}
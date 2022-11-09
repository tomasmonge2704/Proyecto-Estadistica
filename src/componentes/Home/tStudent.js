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
export {tStudentResultado,tStudentFormula}
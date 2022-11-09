 function tStudentResultado(media,N,valores,confianza){
    const t = 2.306
    let xiCuadrado = 0
    let xFija = 0
    valores.forEach( e => {
        xiCuadrado = Math.pow(Number(e),2) + xiCuadrado
        xFija = xFija + Number(e)
        });
    xFija = xFija/N
    const S = Math.sqrt(((xiCuadrado/N) - Math.pow(xFija, 2)) * (N/(N - 1)));
    console.log("S = " + S)
    const resultado = `${xFija - t * (S/Math.sqrt(N))} <= μ <= ${xFija + t * (S/Math.sqrt(N))}`;
    return resultado
}
function tStudentFormula(media,N){
    return `${media} - t σ/${Math.sqrt(N)} <= μ <= ${media} + t σ/${Math.sqrt(N)}`
}
export {tStudentResultado,tStudentFormula}
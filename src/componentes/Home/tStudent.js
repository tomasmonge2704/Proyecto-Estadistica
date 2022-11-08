 
function tStudentResultado(media,desvio,N,confianza){
    const t = 1.96
    const resultado = `${media - t * (desvio/Math.sqrt(N))} <= μ <= ${media + t * (desvio/Math.sqrt(N))}`
    return resultado
}
function tStudentFormula(media,desvio,N){
    return `${media} - t ${desvio}/${Math.sqrt(N)} <= μ <= ${media} + t ${desvio}/${Math.sqrt(N)}`
}
export {tStudentResultado,tStudentFormula}
function DistribucionNormalResultado(media,N,desvio,confianza){
    const S = desvio
    const Z = 1.96
    const resultado = `${media - Z * (S/Math.sqrt(N))} <= μ <= ${media + Z * (S/Math.sqrt(N))}`;
    return resultado
}
function DistribucionNormalFormula(media,N){
    return `${media} - Z σ/√${N}  <= μ <=  ${media} + Z σ/√${N}`
}
export {DistribucionNormalResultado,DistribucionNormalFormula}
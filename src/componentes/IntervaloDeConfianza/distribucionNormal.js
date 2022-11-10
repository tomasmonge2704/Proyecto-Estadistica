function DistribucionNormalResultado(media,N,desvio,confianza){
    const S = desvio
    let Z = 0
    let indexArray = 0
    let Zarray = [1.645,1.695,1.751,1.812,1.881,1.960,2.054,2.170,2.326,2.576]
    let confianzas = [0.95,0.9550000000000001,0.96,0.9650000000000001,0.97,0.975,0.98,0.985,0.99,0.995]
    if(confianza !== undefined){
        Z = 1 - (1 - confianza/100)/2
        confianzas.forEach(function (element, index) { 
            if(element == Z){
                indexArray = index
            }
       })
    }
    const resultado = `${media - Zarray[indexArray] * (S/Math.sqrt(N))} <= μ <= ${media + Zarray[indexArray] * (S/Math.sqrt(N))}`;
    return resultado
}
function DistribucionNormalFormula(media,N){
    return `${media} - Z σ/√${N}  <= μ <=  ${media} + Z σ/√${N}`
}
export {DistribucionNormalResultado,DistribucionNormalFormula}
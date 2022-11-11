export default function TchebycheffResultado(media,N,desvio,confianza,valores){
    let K = Math.sqrt(1/(1 - (confianza / 100)))
    let xFija = 0
    valores.forEach( e => {
        xFija = xFija + Number(e.value)
        });
    if(media){
        xFija = media
    }else{
        xFija = xFija/N
    }
    const pasos = [`X̅ - K σ/√n  <= μ <=  X̅ + K σ/√n`,`${xFija} - K σ/√${N}  <= μ <=  ${xFija} + K σ/√${N}`]
    const resultado = {resultado:`${(xFija - K * (desvio/Math.sqrt(N))).toFixed(4)} <= μ <= ${(xFija + K * (desvio/Math.sqrt(N))).toFixed(4)}`,pasos:pasos};
    if(isNaN(K) || valores.length == 0 ){
        resultado.resultado = "Faltan Valores para poder Resolver" 
    }else{
        pasos.push(`${xFija} - ${K.toFixed(4)} ${desvio}/√${N}  <= μ <=  ${xFija} + ${K.toFixed(4)} ${desvio}/√${N}`)

    }
    return resultado
}
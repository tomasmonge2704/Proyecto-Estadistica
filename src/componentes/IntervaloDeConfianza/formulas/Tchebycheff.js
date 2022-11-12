export default function TchebycheffResultado(media,N,desvio,confianza,valores){
    let K = Math.sqrt(1/(1 - (confianza / 100)))
    let xFija = 0
    let xiCuadrado = 0
    valores.forEach( e => {
        xiCuadrado = Math.pow(Number(e.value),2) + xiCuadrado
        xFija = xFija + Number(e.value)
        });
    if(media){
        xFija = media
    }else{
        xFija = xFija/N
    }
    if(!desvio){
        desvio = Math.sqrt(((xiCuadrado/N) - Math.pow(xFija, 2)) * (N/(N - 1)));
    }
    const pasos = [`X̅ - K σ/√n  <= μ <=  X̅ + K σ/√n`,`${xFija} - K σ/√${N}  <= μ <=  ${xFija} + K σ/√${N}`]
    const resultado = {resultado:`${(xFija - K * (desvio/Math.sqrt(N))).toFixed(4)} <= μ <= ${(xFija + K * (desvio/Math.sqrt(N))).toFixed(4)}`,pasos:pasos};
    if(isNaN(K) || valores.length == 0 || desvio == undefined){
        resultado.resultado = "Faltan Valores para poder Resolver" 
    }else{
        pasos.push(`${xFija.toFixed(4)} - ${K.toFixed(4)} ${desvio.toFixed(4)}/√${N}  <= μ <=  ${xFija.toFixed(4)} + ${K.toFixed(4)} ${desvio}/√${N.toFixed(4)}`)
    }
    return resultado
}
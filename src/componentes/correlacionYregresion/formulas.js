export function obtenerRho(datos){
    const Rho = 0;
    return Rho
}
export function obtenerBeta1(datos){
    console.log(sumarElementosX(datos))
    return (sumarElementosX(datos) * sumarElementosY(datos)) / Math.pow(sumarElementosX,2)
}
export function sumarElementosX(datos){
    let xFija = 0;
    datos.valores.forEach(function(e){
        xFija = xFija + e.valorX
    })
    xFija = xFija / datos.valores.length
    console.log(datos.xFija)
    let sumatoria = 0;
    datos.valores.forEach(function(e){
        sumatoria = sumatoria + (e.valorX - xFija)
    })
    return sumatoria
}
export function sumarElementosY(datos){
    let yFija = 0;
    yFija = datos.valores.forEach(function(e){
        yFija = yFija + e.valorY
    })
    yFija = yFija / datos.valores.length
    let sumatoria = 0;
    sumatoria = datos.valores.forEach(function(e){
        sumatoria = sumatoria + (e.valorY - yFija)
    })
    return sumatoria
}
import { jStat as jStat } from 'jstat'

export function obtenerRho(datos){
    const Rho = (sumarElementosXeY(datos)/ (datos.valores.length - 1)) / (obtenerDesvioX(datos) * obtenerDesvioY(datos));
    return Rho
}
export function obtenerBeta1(datos){
    return sumarElementosXeY(datos) / denominadorBeta1(datos)
}
export function obtenerConfianzaBeta1(datos,confianza){
    const xFija = obtenerXfija(datos);
    let sumartoria = 0;
    datos.valores.forEach(function(e){
        sumartoria = sumartoria + Math.pow((e.valorX - xFija),2);
     })
    const x = 1 -((1 - (confianza / 100)) / 2)
    const T = jStat.studentt.inv( x, (datos.N - 2) )
    const inferior = datos.beta1 - T * (datos.ErrorTipico / Math.sqrt(sumartoria))
    const superior = datos.beta1 + T * (datos.ErrorTipico / Math.sqrt(sumartoria))
    return {inferior:inferior,superior:superior}
}
export function obtenerConfianzaBeta0(datos,confianza){
    const xFija = obtenerXfija(datos);
    let sumartoria = 0;
    let sumartoria2 = 0;

    datos.valores.forEach(function(e){
        sumartoria = sumartoria + Math.pow((e.valorX - xFija),2);
        sumartoria2 = sumartoria2 + Math.pow(e.valorX,2);

     })
    const x = 1 -((1 - (confianza / 100)) / 2)
    const T = jStat.studentt.inv( x, (datos.N - 2) )
    const inferior = datos.beta0 - T * ((datos.ErrorTipico * Math.sqrt(sumartoria2)) / Math.sqrt(datos.N * sumartoria))
    const superior = datos.beta0 + T * ((datos.ErrorTipico * Math.sqrt(sumartoria2)) / Math.sqrt(datos.N * sumartoria))
    return {inferior:inferior,superior:superior}
}
export function obtenerBeta0(datos){
    return obtenerYfija(datos) - (obtenerBeta1(datos) * obtenerXfija(datos))
}
export function obtenerVarianza(datos){
    let y2 = 0;
    let y = 0;
    let XeY = 0;
    datos.valores.forEach(function(e){
        y2 = y2 + Math.pow(e.valorY,2)
        y = y + e.valorY
        XeY = XeY + (e.valorX * e.valorY)
    })
    return (y2 - datos.beta0 * y - datos.beta1 * XeY) / 4
}
export function obtenerValorCriticoF(datos){
return jStat.ftest( datos.F, 1, datos.N - 2)
}
export function obtenerProbabilidad(tscore, n){
return jStat.ttest( tscore, n,2)
}
export function obtenerDesvioBeta0(datos){
    const xFija = obtenerXfija(datos)
    let sumX2_Dividido_N_Menos2 = 0;
    let varX = 0;
    const varianza = Math.pow(datos.ErrorTipico,2) / datos.N
    datos.valores.forEach(function(e){
        sumX2_Dividido_N_Menos2 = sumX2_Dividido_N_Menos2 + (Math.pow(e.valorX,2) / (datos.N - 2));
        varX = varX + Math.pow((e.valorX - xFija),2);
     })
     return Math.sqrt(varianza * (sumX2_Dividido_N_Menos2 / (varX / (datos.N - 2))))
}
export function obtenerDesvioBeta1(datos){
    const xFija = obtenerXfija(datos)
    let varX = 0;
    const varianza = Math.pow(datos.ErrorTipico,2) / (datos.N - 2)
    datos.valores.forEach(function(e){
        varX = varX + Math.pow((e.valorX - xFija),2);
     })
     varX = varX / (datos.N - 2)
     return Math.sqrt(varianza / varX)
}
export function obtenerYsombrero(datos){
    datos.valores.forEach(function(e){
       e.Ysombrero = datos.beta0 + (datos.beta1 * e.valorX)
    })
    return datos.valores
}
export function SumaDeCuadrados (datos){
    const yFija = obtenerYfija(datos)
    let regresion = 0;
    let residuos = 0;
    let total = 0;
    datos.valores.forEach(function(e){
        regresion = regresion + Math.pow(e.Ysombrero - yFija,2)
        residuos = residuos + Math.pow(e.valorY - e.Ysombrero ,2)
        total = total + Math.pow(e.valorY - yFija ,2)
     })
    return {regresion:regresion,residuos:residuos,total:total};
}
export function PromedioDeCuadrados(datos){
    let regresion = datos.sumaDeCuadrados.regresion;
    let residuos = datos.sumaDeCuadrados.residuos / (datos.N - 2);
    let total = datos.sumaDeCuadrados.total / (datos.N - 1);
    return {regresion:regresion,residuos:residuos,total:total};
}
export function obtenerErrorTipico(datos){
    let sumatoriaY = 0
    const yFija = obtenerYfija(datos)
    datos.valores.forEach(function(e){
        sumatoriaY = sumatoriaY + Math.pow((e.valorY - yFija),2)
    })
    return Math.sqrt((1/(datos.N - 2)) * (sumatoriaY - (Math.pow(sumarElementosXeY(datos),2)/denominadorBeta1(datos))))
}
export function r2Ajustado(datos){
    const K = 1;
    return 1 - ((datos.N - 1) / (datos.N - K - 1)) * (1 - Math.pow(datos.Rho,2))
}
export function obtenerXfija(datos){
    let xFija = 0;
    datos.valores.forEach(function(e){
        xFija = xFija + e.valorX
    })
    return xFija / datos.valores.length
}
export function obtenerYfija(datos){
    let yFija = 0;
    datos.valores.forEach(function(e){
        yFija = yFija + e.valorY
    })
    return yFija / datos.valores.length
}
export function denominadorBeta1(datos){
    let sumatoria = 0;
    const xFija = obtenerXfija(datos)
    datos.valores.forEach(function(e){
        sumatoria = sumatoria + Math.pow((e.valorX - xFija),2)
    })
    return sumatoria
}
export function sumarElementosXeY(datos){
    let yFija = obtenerYfija(datos);
    let xFija = obtenerXfija(datos);
    let sumatoria = 0;
    datos.valores.forEach(function(e){
        sumatoria = sumatoria + ((e.valorX - xFija) * (e.valorY - yFija))
    })
    return sumatoria
}
export function obtenerDesvioX(datos){
    let sumatoria = 0;
    let xFija = obtenerXfija(datos);
    datos.valores.forEach(function(e){
        sumatoria = sumatoria + Math.pow((e.valorX - xFija),2)
    })
    return Math.sqrt(sumatoria / (datos.valores.length - 1))
}
export function obtenerDesvioY(datos){
    let sumatoria = 0;
    let yFija = obtenerYfija(datos);
    datos.valores.forEach(function(e){
        sumatoria = sumatoria + Math.pow((e.valorY - yFija),2)
    })
    return Math.sqrt(sumatoria / (datos.valores.length - 1))
}

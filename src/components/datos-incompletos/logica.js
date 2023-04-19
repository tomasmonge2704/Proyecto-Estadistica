import { calcularBeta0,calcularBeta1,obtenerConfianzaBeta0,obtenerConfianzaBeta0SinConfianza, obtenerConfianzaBeta1, obtenerConfianzaBeta1SinConfianza, obtenerEstadisticoT } from "@/components/formulas/formulas";
export default function Logica(datos) {    
    obtenerRho(datos)
    obtenerRhoCuadrado(datos)    
    obtenerBeta1(datos)   
    obtenerBeta0(datos)
    obtenerErrorTipico(datos)
    obtenerDesvioBeta0(datos)
    obtenerDesvioBeta1(datos)
    obtenerN(datos)
    obtenerPromedioDeCuadradosRegresion(datos)
    obtenerPromedioDeCuadradosResiduos(datos)
    obtenerPromedioDeCuadradosTotal(datos)
    obtenerSumaDeCuadradosRegresion(datos)
    obtenerSumaDeCuadradosResiduos(datos)
    obtenersumaDeCuadradosTotal(datos)
    obtenerIntervalosBeta1(datos)
    obtenerIntervalosBeta0(datos)
    obtEstadisticoT(datos)
    obtenerF(datos)
    return datos
}
function obtenerF(datos){
    if(!datos.F && datos.promedioDeCuadradosRegresion && datos.promedioDeCuadradosResiduos) datos.F = datos.promedioDeCuadradosRegresion / datos.promedioDeCuadradosResiduos; 
}
function obtenersumaDeCuadradosTotal(datos){
    if(!datos.sumaDeCuadradosTotal && datos.sumaDeCuadradosRegresion && datos.sumaDeCuadradosResiduos) datos.sumaDeCuadradosTotal = datos.sumaDeCuadradosRegresion + datos.sumaDeCuadradosResiduos;
}
function obtenerRhoCuadrado(datos){
    if(!datos.RhoCuadrado && datos.Rho) datos.RhoCuadrado = (Math.pow(datos.Rho,2) * 100).toFixed(0) + "%";
    if(!datos.RhoCuadrado && datos.sumaDeCuadradosRegresion && datos.sumaDeCuadradosTotal) datos.RhoCuadrado = datos.sumaDeCuadradosRegresion / datos.sumaDeCuadradosTotal;
}
function obtenerRho(datos){
    if(!datos.Rho && datos.RhoCuadrado) datos.Rho = Math.sqrt(datos.RhoCuadrado);
}
function obtenerBeta1(datos){
    if(!datos.beta1 && datos.intervalos.data[1].coef) datos.beta1 = datos.intervalos.data[1].coef;
    if(!datos.beta1 && datos.desvioBeta1 && datos.Tbeta1) datos.beta1 = datos.desvioBeta1 * datos.Tbeta1;
    if(!datos.beta1 && datos.intervalos.data[1].inf1 && datos.intervalos.data[1].sup1){
        datos.beta1 = calcularBeta1(datos.intervalos.data[1].inf1,datos.intervalos.data[1].sup1)
    }
    if(!datos.beta1 && datos.intervalos.data[1].inf2 && datos.intervalos.data[1].sup2){
        datos.beta1 = calcularBeta1(datos.intervalos.data[1].inf2,datos.intervalos.data[1].sup2)
    }
}
function obtenerBeta0(datos){
    if(!datos.beta0 && datos.intervalos.data[0].coef) datos.beta0 = datos.intervalos.data[0].coef;
    if(!datos.beta0 && datos.intervalos.data[0].inf1 && datos.intervalos.data[0].sup1){
        datos.beta0 = calcularBeta0(datos.intervalos.data[0].inf1,datos.intervalos.data[0].sup1)
    }
    if(!datos.beta0 && datos.intervalos.data[0].inf2 && datos.intervalos.data[0].sup2){
        datos.beta0 = calcularBeta0(datos.intervalos.data[0].inf2,datos.intervalos.data[0].sup2)
    }
    if(!datos.beta0 && datos.desvioBeta0 && datos.Tbeta0) datos.beta0 = datos.desvioBeta0 * datos.Tbeta0;
}
function obtenerDesvioBeta0(datos){
    if(!datos.desvioBeta0 && datos.Tbeta0 && datos.beta0) datos.desvioBeta0 = datos.beta0 / datos.Tbeta0;
}
function obtenerDesvioBeta1(datos){
    if(!datos.desvioBeta1 && datos.Tbeta1 && datos.beta1) datos.desvioBeta1 = datos.beta1 / datos.Tbeta1;
}
function obtenerN(datos){
    if(datos.N){
        datos.N1 = datos.N - 1;
        datos.N2 = datos.N - 2;
    }
}
function obtenerPromedioDeCuadradosRegresion(datos){
    if(!datos.promedioDeCuadradosRegresion && datos.sumaDeCuadradosRegresion) datos.promedioDeCuadradosRegresion = datos.sumaDeCuadradosRegresion;
    if(!datos.promedioDeCuadradosRegresion && datos.F && datos.promedioDeCuadradosResiduos) datos.promedioDeCuadradosRegresion = datos.F * datos.promedioDeCuadradosResiduos;
}
function obtenerPromedioDeCuadradosResiduos(datos){
    if(!datos.promedioDeCuadradosResiduos && datos.ErrorTipico) datos.promedioDeCuadradosResiduos = Math.pow(datos.ErrorTipico,2);
    if(!datos.promedioDeCuadradosResiduos && datos.sumaDeCuadradosResiduos && datos.N2) datos.promedioDeCuadradosResiduos = datos.sumaDeCuadradosResiduos / datos.N2;
}
function obtenerPromedioDeCuadradosTotal(datos){
    if(!datos.PromedioDeCuadradosTotal && datos.N1 && datos.sumaDeCuadradosTotal) datos.PromedioDeCuadradosTotal = datos.sumaDeCuadradosTotal / datos.N1;
}
function obtenerSumaDeCuadradosRegresion(datos){
    if(!datos.sumaDeCuadradosRegresion && datos.sumaDeCuadradosTotal && datos.sumaDeCuadradosResiduos) datos.sumaDeCuadradosRegresion = datos.sumaDeCuadradosTotal - datos.sumaDeCuadradosResiduos;
    if(!datos.sumaDeCuadradosRegresion && datos.promedioDeCuadradosRegresion) datos.sumaDeCuadradosRegresion = datos.promedioDeCuadradosRegresion;
}
function obtenerSumaDeCuadradosResiduos(datos){
    if(!datos.sumaDeCuadradosResiduos && datos.sumaDeCuadradosTotal && datos.sumaDeCuadradosRegresion) datos.sumaDeCuadradosResiduos = datos.sumaDeCuadradosTotal - datos.sumaDeCuadradosRegresion;
    if(!datos.sumaDeCuadradosResiduos && datos.N && datos.promedioDeCuadradosResiduos) datos.sumaDeCuadradosResiduos = datos.promedioDeCuadradosResiduos * (datos.N - 2);
}
function obtenerIntervalosBeta0(datos){
    if(!datos.intervalos.data[0].coef && datos.beta0) datos.intervalos.data[0].coef = datos.beta0;
    if(!datos.intervalos.data[0].inf2 && datos.intervalos.data[0].inf1){
        const res = obtenerConfianzaBeta0(datos,datos.intervalos.confianza[0],datos.intervalos.confianza[2],datos.intervalos.data[0].inf1);
        datos.intervalos.data[0].inf2 = res.inferior;
        datos.intervalos.data[0].sup2 = res.superior;
    }
    if(!datos.intervalos.data[0].inf1 && datos.intervalos.data[0].inf2){
        const res = obtenerConfianzaBeta0(datos,datos.intervalos.confianza[2],datos.intervalos.confianza[0],datos.intervalos.data[0].inf2);
        datos.intervalos.data[0].inf1 = res.inferior;
        datos.intervalos.data[0].sup1 = res.superior;
    }
    if(!datos.intervalos.data[0].inf1 && !datos.intervalos.data[0].inf2 && !datos.intervalos.data[0].sup1 && !datos.intervalos.data[0].sup2 && datos.beta0 && datos.N && datos.desvioBeta0){
        const res = obtenerConfianzaBeta0SinConfianza(datos);
        datos.intervalos.data[0].inf1 = res.inferior1;
        datos.intervalos.data[0].sup1 = res.superior1;
        datos.intervalos.data[0].inf2 = res.inferior2;
        datos.intervalos.data[0].sup2 = res.superior2;
    }
}
function obtenerIntervalosBeta1(datos){
    if(!datos.intervalos.data[1].coef && datos.beta1) datos.intervalos.data[1].coef = datos.beta1;
    if(!datos.intervalos.data[1].inf1 && datos.intervalos.data[1].inf2){
        const res = obtenerConfianzaBeta1(datos,datos.intervalos.confianza[2],datos.intervalos.confianza[0],datos.intervalos.data[1].inf2);
        datos.intervalos.data[1].inf1 = res.inferior;
        datos.intervalos.data[1].sup1 = res.superior;
    }
    if(!datos.intervalos.data[1].inf2 && datos.intervalos.data[1].inf1){
        const res = obtenerConfianzaBeta1(datos,datos.intervalos.confianza[0],datos.intervalos.confianza[2],datos.intervalos.confianza,datos.intervalos.data[1].inf2);
        datos.intervalos.data[1].inf2 = res.inferior;
        datos.intervalos.data[1].sup2 = res.superior;
    }
    if(!datos.intervalos.data[1].inf1 && !datos.intervalos.data[1].inf2 && !datos.intervalos.data[1].sup1 && !datos.intervalos.data[1].sup2 && datos.beta1 && datos.N && datos.desvioBeta1){
        const res = obtenerConfianzaBeta1SinConfianza(datos);
        datos.intervalos.data[1].inf1 = res.inferior1;
        datos.intervalos.data[1].sup1 = res.superior1;
        datos.intervalos.data[1].inf2 = res.inferior2;
        datos.intervalos.data[1].sup2 = res.superior2;
    }
}
function obtenerErrorTipico(datos){
    if(!datos.ErrorTipico && datos.promedioDeCuadradosResiduos) datos.ErrorTipico = Math.sqrt(datos.promedioDeCuadradosResiduos);
}
function obtEstadisticoT(datos){
    if(!datos.Tbeta0 && datos.ProbabilidadBeta0 && datos.N) datos.Tbeta0 = obtenerEstadisticoT(datos.ProbabilidadBeta0,datos.N - 2);
    if(!datos.Tbeta1 && datos.ProbabilidadBeta1 && datos.N) datos.Tbeta1 = obtenerEstadisticoT(datos.ProbabilidadBeta1,datos.N - 2);
}
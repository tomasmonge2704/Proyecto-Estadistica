import Result from "./result"
import { obtenerRho,obtenerBeta1, obtenerBeta0, obtenerErrorTipico, r2Ajustado,obtenerYsombrero,SumaDeCuadrados,PromedioDeCuadrados } from "./formulas"
export default function Logica({datos}) {
    if(datos.valores.length !== 0 ) {
        datos.N = datos.valores.length;
        datos.Rho = obtenerRho(datos); 
        datos.RhoCuadrado = (Math.pow(obtenerRho(datos),2) * 100).toFixed(2) + "%";
        datos.RhoCuadradoAjustado = r2Ajustado(datos);
        datos.beta1 = obtenerBeta1(datos); 
        datos.beta0 = obtenerBeta0(datos);
        datos.ErrorTipico = obtenerErrorTipico(datos);
        datos.valores = obtenerYsombrero(datos);
        datos.sumaDeCuadrados = SumaDeCuadrados(datos);
        datos.promedioDeCuadrados = PromedioDeCuadrados(datos);
        datos.F = datos.promedioDeCuadrados.regresion / datos.promedioDeCuadrados.residuos;
    }
    return (<Result result={datos} />)
}

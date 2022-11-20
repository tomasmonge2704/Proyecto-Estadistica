import Result from "./result"
import { obtenerRho,obtenerBeta1, obtenerBeta0, obtenerErrorTipico } from "./formulas"
export default function Logica({datos}) {
    if(datos.valores.length !== 0 ) {
        datos.N = datos.valores.length;
        datos.Rho = obtenerRho(datos); 
        datos.RhoCuadrado = (Math.pow(obtenerRho(datos),2) * 100).toFixed(2) + "%";
        datos.beta1 = obtenerBeta1(datos); 
        datos.beta0 = obtenerBeta0(datos);
        datos.ErrorTipico = obtenerErrorTipico(datos)
    }
    return (<Result result={datos} />)
}
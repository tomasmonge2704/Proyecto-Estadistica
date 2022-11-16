import Result from "./result"
import { obtenerRho,obtenerBeta1 } from "./formulas"
export default function Logica({datos}) {
    if(datos.valores.length !== 0 ) {
        datos.resultado = {Rho:obtenerRho(datos),RhoCuadrado:Math.pow(obtenerRho(datos),2) * 100,beta1:obtenerBeta1(datos)}
    }
    return (<Result result={datos} />)
}
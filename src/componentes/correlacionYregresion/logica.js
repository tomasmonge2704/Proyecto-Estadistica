import Result from "./result"
import { obtenerRho,obtenerBeta1, obtenerBeta0, obtenerErrorTipico, r2Ajustado,obtenerYsombrero,SumaDeCuadrados,PromedioDeCuadrados,obtenerDesvioBeta0, obtenerDesvioBeta1,obtenerValorCriticoF, obtenerProbabilidad} from "./formulas"
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
        datos.ValorCriticoF = obtenerValorCriticoF(datos);
        datos.desvioBeta0 = obtenerDesvioBeta0(datos);
        datos.desvioBeta1 = obtenerDesvioBeta1(datos);
        datos.Tbeta0 = datos.beta0 / datos.desvioBeta0;
        datos.Tbeta1 = datos.beta1 / datos.desvioBeta1;
        datos.ProbabilidadBeta0 = obtenerProbabilidad(datos.Tbeta0,(datos.N - 1));
        datos.ProbabilidadBeta1 = obtenerProbabilidad(datos.Tbeta1,(datos.N - 1));
    }
    return (<Result result={datos} />)
}

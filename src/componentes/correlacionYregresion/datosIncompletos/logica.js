import { calcularBeta0, obtenerConfianzaBeta0, obtenerConfianzaBeta1, obtenerEstadisticoT } from "./formulas";
export default function Logica(datos) {
        if(!datos.intervalos.data[0].coef && datos.beta0) datos.intervalos.data[0].coef = datos.beta0;
        if(!datos.intervalos.data[1].coef && datos.beta1) datos.intervalos.data[1].coef = datos.beta1;
        if(!datos.RhoCuadrado && datos.Rho) datos.RhoCuadrado = (Math.pow(datos.Rho,2) * 100).toFixed(0) + "%";
        if(!datos.promedioDeCuadradosResiduos && datos.ErrorTipico) datos.promedioDeCuadradosResiduos = Math.pow(datos.ErrorTipico,2);
        if(!datos.beta1 && datos.desvioBeta1 && datos.Tbeta1) datos.beta1 = datos.desvioBeta1 * datos.Tbeta1;
        if(!datos.beta0 && datos.desvioBeta0 && datos.Tbeta0) datos.beta0 = datos.desvioBeta0 * datos.Tbeta0;
        if(!datos.sumaDeCuadradosResiduos && datos.sumaDeCuadradosTotal && datos.sumaDeCuadradosRegresion) datos.sumaDeCuadradosResiduos = datos.sumaDeCuadradosTotal - datos.sumaDeCuadradosRegresion;
        if(!datos.sumaDeCuadradosRegresion && datos.sumaDeCuadradosTotal && datos.sumaDeCuadradosResiduos) datos.sumaDeCuadradosRegresion = datos.sumaDeCuadradosTotal - datos.sumaDeCuadradosResiduos;
        if( !datos.sumaDeCuadradosRegresion && datos.promedioDeCuadradosRegresion) datos.sumaDeCuadradosRegresion = datos.promedioDeCuadradosRegresion / 1;
        if( !datos.sumaDeCuadradosResiduos && datos.promedioDeCuadradosResiduos) datos.sumaDeCuadradosRegresion = datos.promedioDeCuadradosResiduos / (datos.N - 2);
        if( !datos.promedioDeCuadradosRegresion && datos.sumaDeCuadradosRegresion) datos.promedioDeCuadradosRegresion = datos.sumaDeCuadradosRegresion;
        if( !datos.sumaDeCuadradosResiduos && datos.N && datos.promedioDeCuadradosResiduos) datos.sumaDeCuadradosResiduos = datos.promedioDeCuadradosResiduos * (datos.N - 2)
        //datos N
        if(datos.N1) {datos.N = datos.N1 + 1;datos.N2 = datos.N1 - 1;}

        //estadistico T
        if(!datos.Tbeta0 && datos.ProbabilidadBeta0 && datos.N) datos.Tbeta0 = obtenerEstadisticoT(datos.ProbabilidadBeta0,datos.N - 2);
        if(!datos.Tbeta1 && datos.ProbabilidadBeta1 && datos.N) datos.Tbeta1 = obtenerEstadisticoT(datos.ProbabilidadBeta1,datos.N - 2);
        //beta0
        if(!datos.beta0 && datos.intervalos.data[0].inf1 && datos.intervalos.data[0].sup1){
            datos.beta0 = calcularBeta0(datos.intervalos.data[0].inf1,datos.intervalos.data[0].sup1)
        }
        // error tipico
        if(!datos.desvioBeta0 && datos.Tbeta0 && datos.beta0) datos.desvioBeta0 = datos.beta0 / datos.Tbeta0;
        // intervalos
        if(!datos.intervalos.data[1].inf1 && datos.intervalos.data[1].inf2){
            const res = obtenerConfianzaBeta1(datos,datos.intervalos.confianza,datos.intervalos.data[1].inf2);
            datos.intervalos.data[1].inf1 = res.inferior;
            datos.intervalos.data[1].sup1 = res.superior;
            datos.intervalos.data[1].coef = datos.beta1;
        }
        if(!datos.intervalos.data[0].inf2 && datos.intervalos.data[0].inf1){
            const res = obtenerConfianzaBeta0(datos,datos.intervalos.confianza,datos.intervalos.data[0].inf1);
            datos.intervalos.data[0].inf2 = res.inferior;
            datos.intervalos.data[0].sup2 = res.superior;
            datos.intervalos.data[0].coef = datos.beta0;

        } 
        return datos
}

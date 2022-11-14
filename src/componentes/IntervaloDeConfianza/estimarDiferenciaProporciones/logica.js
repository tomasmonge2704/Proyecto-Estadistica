import Result from "../Result/result"
import diferenciaProporciones from "../formulas/diferenciaProporciones";
export default function Logica({datos}){
    if(datos.R && datos.N) datos.P1 = datos.R/datos.N;
    if(datos.R2 && datos.N2) datos.P2 =  datos.R2/datos.N2;
    if(datos.R && datos.R2 && datos.N && datos.N2){
        datos.resultado = diferenciaProporciones(datos)
        datos.type = "Diferencia de Proporciones"
    }
    return (
        <Result result={datos}/>
    )
}
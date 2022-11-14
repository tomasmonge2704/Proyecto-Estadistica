import Result from "../Result/result"
import diferenciaMedias from "../formulas/diferenciaMedias"
export default function Logica({datos}){
    if(datos.desvio) datos.varianza = Math.pow(datos.desvio, 2);
    if(datos.desvio2) datos.varianza2 = Math.pow(datos.desvio2, 2);
    if(datos.media && datos.media2){
        datos.resultado = diferenciaMedias(datos)
        datos.type = "Desvio tipico amalgamado"
    }
    return (
        <Result result={datos}/>
    )
}
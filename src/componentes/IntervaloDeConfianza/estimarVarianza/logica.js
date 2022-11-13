import Result from "../Result/result"
import EstimarVarianza from "../formulas/estimarVarianza"
export default function Logica({datos}) {
    if(datos.desvio) datos.varianza = Math.pow(datos.desvio, 2);
    if(datos.varianza || datos.N || datos.confianza){
    datos.type = "Ji cuadrado"
    datos.resultado = EstimarVarianza(datos.media, datos.N,datos.varianza,datos.valores,datos.confianza)}
    return (<Result result={datos} />)
}
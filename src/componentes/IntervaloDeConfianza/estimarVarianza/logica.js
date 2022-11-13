import Result from "../Result/result"
import EstimarVarianza from "../formulas/estimarVarianza"
export default function Logica({datos}) {
    if(datos.R || datos.N || datos.confianza){
    datos.type = "Ji cuadrado"
    datos.resultado = EstimarVarianza(datos.media, datos.N,datos.desvio,datos.valores,datos.confianza)}
    return (<Result result={datos} />)
}
import Result from "@/components/result"
import ProporcionPoblacional from "@/components/formulas/Proporcion"
export default function LogicaProporcion({datos}) {
    if(datos.R || datos.N || datos.confianza){
    datos.type = "Z"
    datos.resultado = ProporcionPoblacional(datos.N,datos.R,datos.confianza)}
    return (<Result result={datos} />)
}
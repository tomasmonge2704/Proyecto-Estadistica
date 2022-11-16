import Result from "../Result/result"
import estimarN from "../formulas/estimarN"
export default function LogicaProporcion({datos}) {
    if(datos.E && datos.confianza){
    datos.type = "Z"
    datos.resultado = estimarN(datos)}
    return (<Result result={datos} />)
}
import Result from "@/components/result"
import estimarN from "@/components/formulas/estimarN"
export default function LogicaProporcion({datos}) {
    if(datos.E && datos.confianza){
    datos.type = "Z"
    datos.resultado = estimarN(datos)}
    return (<Result result={datos} />)
}
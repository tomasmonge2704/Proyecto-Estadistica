import Result from "./result"
import { tStudentResultado, tStudentFormula } from "../tStudent";

export default function Logica({datos}) {
    if(Object.keys(datos).length !== 0){
        if(datos.N <= 30 && datos.desvio == 0 || datos.desvio == undefined){
            datos.valores = JSON.parse(sessionStorage.getItem('datos')).valores;
            datos.type = "T de Student"
            datos.formula = tStudentFormula(datos.media,datos.N)
            datos.resultado = tStudentResultado(datos.media, datos.N,datos.valores,datos.confianza)
        }else{
            datos.type = "Distribucion Normal"
        }
    }
   
    return (<Result result={datos} />)
}
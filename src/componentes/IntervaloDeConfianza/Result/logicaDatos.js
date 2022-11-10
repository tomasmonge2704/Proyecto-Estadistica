import Result from "./result"
import { tStudentResultado, tStudentFormula } from "../tStudent";
import {DistribucionNormalResultado,DistribucionNormalFormula} from "../distribucionNormal";
export default function Logica({datos}) {
    if(Object.keys(datos).length !== 0){
        if(datos.N <= 30 && datos.desvio == 0 || datos.desvio == undefined){
            datos.valores = JSON.parse(sessionStorage.getItem('datos')).valores;
            datos.type = "T de Student"
            datos.formula = tStudentFormula(datos.media,datos.N,datos.valores)
            datos.resultado = tStudentResultado(datos.media, datos.N,datos.valores,datos.confianza)
        }else{
            datos.type = "Distribucion Normal"
            datos.formula = DistribucionNormalFormula(datos.media,datos.N)
            datos.resultado = DistribucionNormalResultado(datos.media, datos.N,datos.desvio,datos.confianza)
        }
    }
   
    return (<Result result={datos} />)
}
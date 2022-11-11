import Result from "./result"
import tStudentResultado from "../tStudent";
import DistribucionNormalResultado from "../distribucionNormal";
import TchebycheffResultado from "../Tchebycheff";
export default function Logica({datos}) {
    if(datos.distribucion == undefined) datos.distribucion = "Normal";
    if(datos.media || datos.desvio || datos.N || datos.confianza){
        if(datos.distribucion == "Normal" && datos.N <= 30 && datos.desvio == 0 || datos.desvio == undefined){
            datos.valores = JSON.parse(sessionStorage.getItem('datos')).valores;
            datos.type = "T de Student"
            datos.resultado = tStudentResultado(datos.media, datos.N,datos.valores,datos.confianza)
        }else{
            if(datos.N <= 30 && datos.distribucion !== "Normal"){
                datos.type = "Teorema de Chebycheff"
                datos.resultado = TchebycheffResultado(datos.media, datos.N,datos.desvio,datos.confianza)
            }else{
                datos.type = "Z"
                datos.resultado = DistribucionNormalResultado(datos.media, datos.N,datos.desvio,datos.confianza)
            }
        }
    }
   
    return (<Result result={datos} />)
}
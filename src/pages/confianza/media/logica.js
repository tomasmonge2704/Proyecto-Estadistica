import Result from "@/components/result";
import tStudentResultado from "@/components/formulas/tStudent";
import DistribucionNormalResultado from "@/components/formulas/distribucionNormal";
import mediaPoblacionalFinita_Z from "@/components/formulas/mediaPoblacionalFinita";
import TchebycheffResultado from "@/components/formulas/Tchebycheff";
import tStudentConCorreccion from "@/components/formulas/tStudentConCorreccion";
export default function Logica({datos}) {
    if(datos.desvio === 0)datos.desvio = undefined;
    if(datos.varianza !== undefined)datos.desvio = Math.sqrt(datos.varianza);
    if(datos.media || datos.desvio || datos.N || datos.confianza){
        if(datos.distribucion == "Normal" && datos.N <= 30 || datos.n <= 30 && !datos.varianza){
            if(datos.n){
                datos.type = "T de Student para poblaciones finitas"
                datos.resultado = tStudentConCorreccion(datos)
            }else{
                datos.type = "T de Student"
                datos.resultado = tStudentResultado(datos)
            }
        }else{
            if(datos.N <= 30 && datos.distribucion !== "Normal"){
                datos.type = "Teorema de Chebycheff"
                datos.resultado = TchebycheffResultado(datos.media, datos.N,datos.desvio,datos.confianza,datos.valores)
            }else{
                if(datos.desvio && datos.media && datos.N && datos.confianza){
                    if(datos.n){
                        datos.type = "Z para poblaciones finitas"
                        datos.resultado = mediaPoblacionalFinita_Z(datos)
                    }else{
                        datos.type = "Z"
                        datos.resultado = DistribucionNormalResultado(datos.media, datos.N,datos.desvio,datos.confianza)
                    }
                }
            }
        }
    }
   
    return (<Result result={datos} />)
}
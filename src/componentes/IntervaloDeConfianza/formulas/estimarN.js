import { obtenerZ } from "./utils";
export default function estimarN(datos){
    const z = obtenerZ(datos.confianza)
    const Ecuadrado = Math.pow(datos.E,2)
    let pasos; 
    let resultado;
    if(datos.P){
        const qFija = 1 - datos.P;
        pasos = [`n = (Z² . σ²)/ e²`,`(${z}² . ${datos.P} . ${qFija})/ ${Ecuadrado}`]
        resultado = `n = ${Math.round(((Math.pow(z,2) * datos.P * qFija)/ Ecuadrado))}`
    }else{
       pasos = [`n = (Z² . σ²)/ e²`,`(${z}² . ${datos.varianza})/ ${Ecuadrado}`]
       resultado = `n = ${Math.round(((Math.pow(z,2) * datos.varianza)/ Ecuadrado))}`
    } 
    return {resultado:resultado,pasos:pasos};
}
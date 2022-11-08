import Result from "./result"
export default function Logica({datos}) {
    console.log(datos)
    
    if(datos.N <= 30 && datos.desvio == 0){
        datos.type = "T de Student"
    }else{
        if(Object.keys(datos).length !== 0){
            datos.type = "Distribucion Normal"
        }
    }
    return (<Result result={datos} />)
}
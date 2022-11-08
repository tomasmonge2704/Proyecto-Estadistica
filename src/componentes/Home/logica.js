import Result from "./result"
import { useState, useEffect } from "react";
export default function Logica() {
    const [result, setResult] = useState({});
    useEffect(() => {
        document.getElementById('media').addEventListener('change', updateValueMedia)
        document.getElementById('desvio').addEventListener('change', updateValueDesvio)
        document.getElementById('N').addEventListener('change', updateValueN)
        document.getElementById('confianza').addEventListener('change', updateValueConfianza)
    }, []);
    function updateValueMedia(e) {
        setResult(prevState => ({
            ...prevState,
            media: Number(e.target.value)

        }))
    }
    function updateValueDesvio(e) {
        setResult(prevState => ({
            ...prevState,
            desvio: Number(e.target.value)

        }))
        validateType()
    }
    function updateValueN(e) {
        setResult(prevState => ({
            ...prevState,
            N: Number(e.target.value)

        }))
        validateType()
    }
    function updateValueConfianza(e) {
        setResult(prevState => ({
            ...prevState,
            confianza: Number(e.target.value)

        }))
    }
    function validateType(){
        console.log(result)
        if(result.N >= 30){
            setResult(prevState => ({
                ...prevState,
                type:"T de Student"
    
            }))
        }else {
            setResult(prevState => ({
                ...prevState,
                type:"Normal"
    
            }))
        }
    }
    
    return (<Result result={result} />)
}
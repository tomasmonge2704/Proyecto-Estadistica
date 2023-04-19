import Logica from "@/components/datos-incompletos/logica";
import { useState, useEffect } from "react";
import Contenedor from "@/components/datos-incompletos/contenedor";
export default function GetDatosIncompletos() {
    const [datos, setDatos] = useState({"distribucion":"Normal","intervalos":{"confianza":[95,95,99,99],"data":[{"row":"Ordenada al origen (𝛽⁰)","coef":37.05333456,"inf1":0,"sup1":0,"inf2":0,"sup2":0},{"row":"Pendiente (𝛽¹)","coef":0.431508746,"inf1":0,"sup1":0,"inf2":0,"sup2":0}]},"valores":[],"RhoCuadradoAjustado":0.178134591,"N":20,"N1":19,"N2":18,"promedioDeCuadradosResiduos":788.2532766,"sumaDeCuadradosRegresion":43.7918487,"promedioDeCuadradosRegresion":43.7918487,"sumaDeCuadradosResiduos":14188.55898,"desvioBeta0":11.02251572,"desvioBeta1":0.190736365,"ProbabilidadBeta0":0.0034746,"Tbeta0":3.3616040897031843,"beta0":37.05333392316964,"ProbabilidadBeta1":0.036284391,"Tbeta1":2.2623307650844846,"beta1":0.43150874655988347,"F":1});
    useEffect(() => {
        sessionStorage.setItem('datos', JSON.stringify(datos));
        window.addEventListener('storage', () => {
            const datosStorage = Logica(JSON.parse(sessionStorage.getItem('datos')));
            setDatos(datosStorage);
            sessionStorage.setItem('datos', JSON.stringify(datosStorage));
        })
    }, []);
    return (
        <Contenedor datos={datos} />
    )
}
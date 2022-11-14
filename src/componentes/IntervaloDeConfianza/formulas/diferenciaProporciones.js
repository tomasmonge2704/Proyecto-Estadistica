import { obtenerZ } from "./utils";

export default function diferenciaProporciones(datos){
    const Z = obtenerZ(datos.confianza)
    let qFija1 = 1 - datos.P1
    let qFija2 = 1 - datos.P2

    let pasos = ["(p1-p2) - Z √(p1 q1 / n1 + p2 q2 / n2) ≤ P1 - P2 ≤ (p1-p2) - Z √(p1 q1 / n1 + p2 q2 / n2)"
    ,`(${datos.P1} - ${datos.P2}) - ${Z} √(${datos.P1} ${qFija1} / ${datos.N} + ${datos.P2} ${qFija2} / ${datos.N2} ≤ P1 - P2 ≤ ${datos.P1} - ${datos.P2}) + ${Z} √(${datos.P1} ${qFija1} / ${datos.N} + ${datos.P2} ${qFija2} / ${datos.N2}`]
    const resultado = {resultado:`${((datos.P1 - datos.P2) - Z * Math.sqrt((datos.P1 * qFija1 / datos.N + datos.P2 * qFija2 / datos.N2))).toFixed(4)} ≤ P1 - P2 ≤ ${((datos.P1 - datos.P2) + Z * Math.sqrt((datos.P1 * qFija1 / datos.N + datos.P2 * qFija2 / datos.N2))).toFixed(4)}`,pasos:pasos};
    return resultado;
}
import { Scatter, ScatterChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import regression from 'regression';
import { Card } from '@nextui-org/react';

export default function GraficoCorrelacion({datos}) {
    const regressionLine = regression.linear(datos.valores.map((d) => [d.valorX, d.valorY]));
    const linearRegressionData = regressionLine.points.map((point) => ({
    valorX: point[0],
    valorY: point[1]
    }));
    return(
        <Card variant="bordered" style={{height:"30em",width:"100%", padding:"2%"}}>
               <ResponsiveContainer width="100%" height="100%">
            <ScatterChart>
            <CartesianGrid stroke="#f5f5f5" />
                <XAxis type="number" dataKey="valorX" name="variable X"/>
                <YAxis type="number" dataKey="valorY" name="variable Y"/>
                <Tooltip/>
                <Scatter name="correlación" data={datos.valores} fill="#8884d8"/>
                <Scatter name="regresion" data={linearRegressionData} fill="#82ca9d" line/>
            </ScatterChart>
        </ResponsiveContainer>     
        </Card>
    )
}
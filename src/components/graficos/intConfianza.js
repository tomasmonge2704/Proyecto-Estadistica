import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
  } from 'recharts';
import { Card } from "@nextui-org/react";

export default function GraficoIntervaloConfianza({ datos }) {
  
  return datos.valores.length !== 0 ? (
    <Card
      variant="bordered"
      style={{ height: "30em", width: "100%", padding: "2%" }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={datos.valores}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="y" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  ) : null;
}

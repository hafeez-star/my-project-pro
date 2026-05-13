

import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const data = [
    { month: "Feb", electricity: 40, gas: 30, water: 50 },
    { month: "Mar", electricity: 60, gas: 50, water: 70 },
    { month: "Apr", electricity: 55, gas: 40, water: 60 , active: true},
    { month: "May", electricity: 60, gas: 45, water: 65 },
    { month: "Jun", electricity: 80, gas: 70, water: 92 },
    { month: "Jul", electricity: 50, gas: 87, water: 75 },
    { month: "Aug", electricity: 55, gas: 60, water: 68 },
    { month: "Sep", electricity: 48, gas: 52, water: 62 },
];

const Chart = () => {
    return (
        <div
            style={{
                width: "100%",
                height: 500,
                background: "#f8f8f8",
                padding: "20px",
                borderRadius: "20px",
            }}
        >
            <h2 style={{ marginBottom: "20px" }}>Consumption</h2>

            <ResponsiveContainer width="100%" height="90%">
                <BarChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 0, bottom: 10 }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />

                    <XAxis dataKey="month" />

                    <YAxis domain={[10, 90]} />

                    <Tooltip />

                    <Legend />

                    <Bar
                        dataKey="electricity"
                        fill="#f5a000"
                        radius={[6, 6, 0, 0]}
                    />

                    <Bar
                        dataKey="gas"
                        fill="#0f9d94"
                        radius={[6, 6, 0, 0]}
                    />

                    <Bar
                        dataKey="water"
                        fill="#ff5a00"
                        radius={[6, 6, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;
'use client'
import React from 'react'
import { Bar, BarChart as BarGraph, ResponsiveContainer, XAxis, YAxis } from 'recharts'

type Props = {
    name: string;
    total: number;
}

const chartData: Props[] = [
    { name: "Jan", total: Math.floor(Math.random() * 12000 ) + 1000},
    { name: "Feb", total: Math.floor(Math.random() * 15000 ) + 1000},
    { name: "Mar", total: Math.floor(Math.random() * 18000 ) + 1000},
    { name: "Apr", total: Math.floor(Math.random() * 14000 ) + 1000},
    { name: "May", total: Math.floor(Math.random() * 20000 ) + 1000},
    { name: "Jun", total: Math.floor(Math.random() * 17000 ) + 1000},
    { name: "Jul", total: Math.floor(Math.random() * 22000 ) + 1000},
    { name: "Aug", total: Math.floor(Math.random() * 19000 ) + 1000},
    { name: "Sep", total: Math.floor(Math.random() * 21000 ) + 1000},
    { name: "Oct", total: Math.floor(Math.random() * 23000 ) + 1000},
    { name: "Nov", total: Math.floor(Math.random() * 25000 ) + 1000},
    { name: "Dec", total: Math.floor(Math.random() * 27000 ) + 1000},
];

const BarChart = () => {
    return (
        <div className='w-full rounded-xl'>
            <ResponsiveContainer width="100%" height={350}>
                <BarGraph data={chartData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
                    <XAxis
                        dataKey="name"
                        tickLine={false}
                        axisLine={false}
                        stroke="#888888"
                        fontSize={12}
                        tick={{ fill: '#6b7280' }}
                    />
                    <YAxis
                        tickLine={false}
                        axisLine={false}
                        stroke="#888888"
                        fontSize={12}
                        tick={{ fill: '#6b7280' }}
                        tickFormatter={(value) => `$${value}`}
                    />
                    <Bar
                        dataKey="total"
                        radius={[4, 4, 0, 0]}
                        fill="#2563eb"
                        barSize={24}
                    />
                </BarGraph>
            </ResponsiveContainer>
        </div>
    )
}

export default BarChart;




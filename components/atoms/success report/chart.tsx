import { useTodoZustand } from '@/store/todoZustandCreate';
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

interface ChartType {
    cx: String,
    cy: String,
    midAngle: number,
    innerRadius: number,
    outerRadius: number,
    percent: number,
    index: number
}

export const SuccessReportChart = ()=> {
  const [data, setData] = useState<Object[]>([])
  const allInrpogressTasks = useTodoZustand(state => state.inProgressTasks)
  const allDoneTasks = useTodoZustand(state => state.doneTasks)
  const COLORS = ['#00B8A9', '#2F3A58'];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }:ChartType) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = + cx + radius * Math.cos(-midAngle * RADIAN);
    const y = + cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text x={x} y={y} fill="white" textAnchor={'middle'} dominantBaseline="central" className='font-vazir-adad text-sm'>
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  
  useEffect(() => {
    const data = [
      { name: 'Done', value: allDoneTasks.length },
      { name: 'All', value: (allInrpogressTasks.length + allDoneTasks.length) - allDoneTasks.length  },
    ];
    setData(data)
  },[allDoneTasks,allInrpogressTasks])


    return (
        <PieChart width={150} height={60} className='w-full'>
          <Pie
            data={data}
            cx="50%"
            cy="107%"
            startAngle={0}
            endAngle={180}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={60}
            innerRadius={30}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
    );
  
}

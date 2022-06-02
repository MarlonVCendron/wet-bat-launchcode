import React from 'react';
import { useToken } from '@chakra-ui/react';
import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
} from 'recharts';

const data = [
  { name: 'Lorem Ipsum', value: 2400 },
  { name: 'Lorem Ipsum', value: 1210 },
  { name: 'Lorem Ipsum', value: 2290 },
  { name: 'Lorem Ipsum', value: 1450 },
  { name: 'Lorem Ipsum', value: 2181 },
  { name: 'Lorem Ipsum', value: 1600 },
];

interface ChartProps {
  height: number;
}

const Chart: React.FC<ChartProps> = ({ height }) => {
  const brandColors = useToken('colors', [
    'brand.100',
    'brand.200',
    'brand.300',
    'brand.400',
    'brand.500',
    'brand.600',
  ]);
  const gray600 = useToken('colors', ['gray.600']);

  return (
    <ResponsiveContainer width={256} height={height}>
      <BarChart data={data} layout="vertical">
        <XAxis type="number" hide={true} />
        <YAxis
          type="category"
          dataKey="name"
          stroke={gray600}
          axisLine={false}
          tickLine={false}
          width={100}
        />
        <RechartsTooltip cursor={{ fill: 'white' }} />
        <Bar dataKey="value" radius={20} barSize={8}>
          {data.map((_, index) => (
            <Cell key={index} fill={brandColors[index % brandColors.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;

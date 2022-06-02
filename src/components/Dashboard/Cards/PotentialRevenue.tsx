import React from 'react';
import { PieChart as PieChartIcon } from '@mui/icons-material';
import { Pie, PieChart, Tooltip, Cell, ResponsiveContainer } from 'recharts';

import Card from './Card';
import { Flex } from '@chakra-ui/react';

const data = [
  {
    name: 'A',
    value: 4,
  },
  {
    name: 'B',
    value: 6,
  },
  {
    name: 'C',
    value: 3,
  },
  {
    name: 'D',
    value: 2,
  },
  {
    name: 'E',
    value: 2,
  },
];

const COLORS = [
  '#5bbfba',
  '#5f6caf',
  '#e7f0c3',
  '#f0cf85',
  '#a4d4ae',
  '#4264c9',
];

const PotentialRevenue: React.FC = () => {
  return (
    <Card title="Potential revenue" icon={PieChartIcon}>
      <Flex>
        {[1, 2, 3].map((i) => (
          <ResponsiveContainer key={i} height={300}>
            <PieChart>
              <Tooltip />
              <Pie data={data} dataKey="value" nameKey="name" outerRadius={90}>
                {data.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        ))}
      </Flex>
    </Card>
  );
};

export default PotentialRevenue;

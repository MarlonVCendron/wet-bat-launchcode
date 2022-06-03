import React from 'react';
import { PieChart as PieChartIcon } from '@mui/icons-material';
import { Pie, PieChart, Tooltip, Cell, ResponsiveContainer } from 'recharts';

import Card from './Card';
import { Flex, useToken } from '@chakra-ui/react';

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

const PotentialRevenue: React.FC = () => {
  const brandColors = useToken('colors', [
    'brand.100',
    'brand.200',
    'brand.300',
    'brand.400',
    'brand.500',
    'brand.600',
  ]);

  return (
    <Card title="Potential revenue" icon={PieChartIcon} threeDots>
      <Flex direction={{ base: 'column', md: 'row' }}>
        {[1, 2, 3].map((i) => (
          <ResponsiveContainer key={i} height={300}>
            <PieChart>
              <Tooltip />
              <Pie data={data} dataKey="value" nameKey="name" outerRadius={90}>
                {data.map((_, index) => (
                  <Cell
                    key={index}
                    fill={brandColors[index % brandColors.length]}
                  />
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

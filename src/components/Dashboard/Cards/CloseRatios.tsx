import React from 'react';
import { Flex, Heading, Image, useToken } from '@chakra-ui/react';
import { Pie, PieChart, Tooltip, Cell, ResponsiveContainer } from 'recharts';
import { Handshake as HandshakeIcon } from '@mui/icons-material';

import Card from './Card';
import { default as ArrowIcon } from '../../../images/arrow.svg';

const data = [
  {
    name: 'A',
    value: 70,
  },
  {
    name: 'B',
    value: 30,
  },
];

const CloseRatios: React.FC = () => {
  const brandColors = useToken('colors', ['brand.100', 'brand.400']);
  return (
    <Card title="Close ratios" icon={HandshakeIcon} threeDots>
      <Flex position="relative">
        <Image
          src={ArrowIcon}
          h={8}
          position="absolute"
          bottom="5%"
          left="50%"
          transform="translate(-50%, -50%)"
          zIndex={0}
        />

        <ResponsiveContainer height={300} width="100%">
          <PieChart>
            <Tooltip />
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              startAngle={90}
              endAngle={450}
              innerRadius={70}
              outerRadius={90}
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={brandColors[index % brandColors.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <Heading
          as="h2"
          size="2xl"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          color="brand.200"
        >
          {data[0].value}%
        </Heading>
      </Flex>
    </Card>
  );
};

export default CloseRatios;

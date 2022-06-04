import React, { useEffect, useContext } from 'react';
import { PieChart as PieChartIcon } from '@mui/icons-material';
import { Pie, PieChart, Tooltip, Cell, ResponsiveContainer } from 'recharts';
import { observer } from 'mobx-react-lite';

import Card from './Card';
import { Flex, useToken } from '@chakra-ui/react';
import Loader from '../../Loader';
import Error from '../../Error';
import { RootContext } from '../../../store/useStore';

const PotentialRevenue: React.FC = observer(() => {
  const brandColors = useToken('colors', [
    'brand.100',
    'brand.200',
    'brand.300',
    'brand.400',
    'brand.500',
    'brand.600',
  ]);
  const {
    statsStore: {
      loadPotRevenueData,
      potRevenueData,
      potRevenueError,
      potRevenueLoading,
    },
  } = useContext(RootContext);

  useEffect(() => {
    loadPotRevenueData();
  }, []);

  return (
    <Card title="Potential revenue" icon={PieChartIcon} threeDots>
      <Loader loading={potRevenueLoading}>
        {potRevenueError ? (
          <Error text="Error loading potential revenue data." />
        ) : (
          <Flex direction={{ base: 'column', md: 'row' }}>
            {potRevenueData.map((data, index) => (
              <ResponsiveContainer key={index} height={300}>
                <PieChart>
                  <Tooltip />
                  <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={90}
                  >
                    {data.map((_, i) => (
                      <Cell
                        key={i}
                        fill={brandColors[i % brandColors.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            ))}
          </Flex>
        )}
      </Loader>
    </Card>
  );
});

export default PotentialRevenue;

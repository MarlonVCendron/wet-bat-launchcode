import React, { useEffect, useContext } from 'react';
import { Flex, Heading, Image, useToken } from '@chakra-ui/react';
import { Pie, PieChart, Tooltip, Cell, ResponsiveContainer } from 'recharts';
import { Handshake as HandshakeIcon } from '@mui/icons-material';
import { observer } from 'mobx-react-lite';

import { RootContext } from '../../../store/useStore';
import Loader from '../../Loader';
import Error from '../../Error';
import Card from './Card';
import { default as ArrowIcon } from '../../../images/arrow.svg';

const CloseRatios: React.FC = observer(() => {
  const brandColors = useToken('colors', ['brand.100', 'brand.400']);

  const {
    statsStore: {
      loadCloseRatiosData,
      closeRatiosData,
      closeRatiosError,
      closeRatiosLoading,
    },
  } = useContext(RootContext);

  useEffect(() => {
    loadCloseRatiosData();
  }, []);

  return (
    <Card title="Close ratios" icon={HandshakeIcon} threeDots>
      <Loader loading={closeRatiosLoading}>
        {closeRatiosError ? (
          <Error text="Error loading close ratios data." />
        ) : (
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
                  data={[...closeRatiosData]}
                  dataKey="value"
                  nameKey="name"
                  startAngle={90}
                  endAngle={450}
                  innerRadius={70}
                  outerRadius={90}
                >
                  {closeRatiosData.map((_, index) => (
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
              {closeRatiosData.length ? `${closeRatiosData[0]['value']}%` : ''}
            </Heading>
          </Flex>
        )}
      </Loader>
    </Card>
  );
});

export default CloseRatios;

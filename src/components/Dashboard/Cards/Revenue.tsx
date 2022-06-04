import React, { useEffect, useContext } from 'react';
import { SignalCellularAlt as SignalCellularAltIcon } from '@mui/icons-material';
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  ResponsiveContainer,
} from 'recharts';
import { useToken } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';

import Card from './Card';
import Loader from '../../Loader';
import Error from '../../Error';
import { RootContext } from '../../../store/useStore';

const Revenue: React.FC = observer(() => {
  const [brand100, brand200] = useToken('colors', ['brand.100', 'brand.200']);
  const {
    statsStore: { loadRevenueData, revenueData, revenueError, revenueLoading },
  } = useContext(RootContext);

  useEffect(() => {
    loadRevenueData();
  }, []);

  return (
    <Card title="Revenue" icon={SignalCellularAltIcon} threeDots>
      <Loader loading={revenueLoading}>
        {revenueError ? (
          <Error text="Error loading revenue data." />
        ) : (
          <ResponsiveContainer height={300} width="100%">
            <LineChart
              data={[...revenueData]}
              margin={{ left: 20, right: 10, top: 10 }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                type="category"
                stroke="#A0AEC0"
                tick={{ fontSize: 16 }}
              />
              <Tooltip />
              <Line
                dataKey="line1"
                stroke={brand100}
                strokeWidth={6}
                activeDot={{ r: 10 }}
              />
              <Line
                dataKey="line2"
                stroke={brand200}
                strokeWidth={6}
                activeDot={{ r: 10 }}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </Loader>
    </Card>
  );
});

export default Revenue;

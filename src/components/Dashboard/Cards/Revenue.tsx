import React from 'react';
import { SignalCellularAlt as SignalCellularAltIcon } from '@mui/icons-material';
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  ResponsiveContainer,
} from 'recharts';

import Card from './Card';

const data = [
  {
    month: 'JAN',
    line1: 1,
    line2: 4,
  },
  {
    month: 'FEB',
    line1: 5,
    line2: 2,
  },
  {
    month: 'MAR',
    line1: 6,
    line2: 4,
  },
  {
    month: 'APR',
    line1: 2,
    line2: 7,
  },
  {
    month: 'MAY',
    line1: 8,
    line2: 3,
  },
  {
    month: 'JUN',
  },
  {
    month: 'JUL',
  },
  {
    month: 'AUG',
  },
  {
    month: 'SEP',
  },
  {
    month: 'OCT',
  },
  {
    month: 'NOV',
  },
  {
    month: 'DEC',
  },
];

const Revenue: React.FC = () => {
  return (
    <Card title="Revenue" icon={SignalCellularAltIcon}>
      <ResponsiveContainer height={300} width="100%">
        <LineChart data={data} margin={{ left: 20, right: 10, top: 10 }}>
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
            stroke="#5f6caf"
            strokeWidth={6}
            activeDot={{ r: 10 }}
          />
          <Line
            dataKey="line2"
            stroke="#5bbfba"
            strokeWidth={6}
            activeDot={{ r: 10 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default Revenue;

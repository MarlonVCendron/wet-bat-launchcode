import React from 'react';
import { Telegram as TelegramIcon } from '@mui/icons-material';

import Card from './Card';

const Destinations: React.FC = () => {
  return <Card title="New leads" icon={TelegramIcon}></Card>;
};

export default Destinations;

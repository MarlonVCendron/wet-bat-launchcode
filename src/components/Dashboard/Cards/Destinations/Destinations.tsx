import React from 'react';
import { Telegram as TelegramIcon } from '@mui/icons-material';
import { Flex, Divider, Box } from '@chakra-ui/react';

import Card from '../Card';
import Chart from './Chart';
import Map from './Map';

const Destinations: React.FC = () => {
  const height = 512;
  const padding = 4;

  return (
    <Card
      title="Popular destinations & packages"
      icon={TelegramIcon}
      p={0}
      threeDots
    >
      <Flex h={height + 8 * padding}>
        <Box p={padding}>
          <Chart height={height} />
        </Box>

        <Divider orientation="vertical" />

        <Box p={padding} h={height} w="full">
          <Map height={height} />
        </Box>
      </Flex>
    </Card>
  );
};

export default Destinations;

import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

import Welcome from './Welcome';
import {
  CloseRatios,
  Destinations,
  NewLeads,
  PendingQuotes,
  PotentialRevenue,
  QuickQuote,
  Revenue,
  TeamChat,
} from './Cards';

const Dashboard: React.FC = () => {
  return (
    <Grid
      templateRows="repeat(4, auto)"
      templateColumns="repeat(8, 1fr)"
      gap={5}
      p={5}
    >
      <GridItem rowSpan={1} colSpan={8} rowStart={1} colStart={1}>
        <Welcome />
      </GridItem>
      <GridItem
        rowSpan={1}
        colSpan={{ base: 8, lg: 4, '2xl': 3 }}
        rowStart={2}
        colStart={1}
      >
        <QuickQuote />
      </GridItem>
      <GridItem
        rowSpan={1}
        colSpan={{ base: 8, lg: 4, '2xl': 3 }}
        rowStart={{ base: 3, lg: 2 }}
        colStart={1}
      >
        <PendingQuotes />
      </GridItem>
      <GridItem
        rowSpan={1}
        colSpan={{ base: 8, lg: 4, '2xl': 2 }}
        rowStart={{ base: 4, lg: 3, '2xl': 2 }}
        colStart={{ base: 1, '2xl': 7 }}
      >
        <NewLeads />
      </GridItem>
      <GridItem
        rowSpan={1}
        colSpan={{ base: 8, '2xl': 6 }}
        rowStart={{ base: 5, lg: 4, '2xl': 3 }}
        colStart={1}
      >
        <Destinations />
      </GridItem>
      <GridItem
        rowSpan={1}
        colSpan={{ base: 8, lg: 4, '2xl': 2 }}
        rowStart={{ base: 6, lg: 3 }}
        colStart={{ base: 1, lg: 5, '2xl': 7 }}
      >
        <TeamChat />
      </GridItem>
      <GridItem
        rowSpan={1}
        colSpan={{ base: 8, '2xl': 3 }}
        rowStart={{ base: 7, lg: 5, '2xl': 4 }}
        colStart={1}
      >
        <Revenue />
      </GridItem>
      <GridItem
        rowSpan={1}
        colSpan={{ base: 8, '2xl': 3 }}
        rowStart={{ base: 8, lg: 6, '2xl': 4 }}
        colStart={1}
      >
        <PotentialRevenue />
      </GridItem>
      <GridItem
        rowSpan={1}
        colSpan={{ base: 8, '2xl': 2 }}
        rowStart={{ base: 9, lg: 7, '2xl': 4 }}
        colStart={1}
      >
        <CloseRatios />
      </GridItem>
    </Grid>
  );
};

export default Dashboard;

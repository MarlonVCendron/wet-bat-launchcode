import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

import Welcome from './Welcome';
import QuickQuote from './QuickQuote';
import PendingQuotes from './PendingQuotes';
import NewLeads from './NewLeads';
import Destinations from './Destinations';
import TeamChat from './TeamChat';
import Revenue from './Revenue';
import PotentialRevenue from './PotentialRevenue';
import CloseRatios from './CloseRatios';

const Dashboard: React.FC = () => {
  return (
    <Grid
      h="500px"
      templateRows="repeat(4, 1fr)"
      templateColumns="repeat(8, 1fr)"
      gap={5}
      p={5}
    >
      <GridItem rowSpan={1} colSpan={8}>
        <Welcome />
      </GridItem>
      <GridItem rowSpan={1} colSpan={3}>
        <QuickQuote />
      </GridItem>
      <GridItem rowSpan={1} colSpan={3}>
        <PendingQuotes />
      </GridItem>
      <GridItem rowSpan={1} colSpan={2}>
        <NewLeads />
      </GridItem>
      <GridItem rowSpan={1} colSpan={6}>
        <Destinations />
      </GridItem>
      <GridItem rowSpan={1} colSpan={2}>
        <TeamChat />
      </GridItem>
      <GridItem rowSpan={1} colSpan={3}>
        <Revenue />
      </GridItem>
      <GridItem rowSpan={1} colSpan={3}>
        <PotentialRevenue />
      </GridItem>
      <GridItem rowSpan={1} colSpan={2}>
        <CloseRatios />
      </GridItem>
    </Grid>
  );
};

export default Dashboard;

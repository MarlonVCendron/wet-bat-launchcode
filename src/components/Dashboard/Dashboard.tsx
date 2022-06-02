import React from 'react';
import { Box, Grid, GridItem } from '@chakra-ui/react';

import Welcome from './Welcome';

const Dashboard: React.FC = () => {
  return (
    <Grid
      h="500px"
      templateRows="repeat(4, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={5}
      p={5}
    >
      <GridItem rowSpan={1} colSpan={5}>
        <Welcome />
      </GridItem>
      <GridItem rowSpan={1} colSpan={2}>
        <Box borderRadius={12} w="full" h="300px" bg="gray.300" />
      </GridItem>
      <GridItem rowSpan={1} colSpan={2}>
        <Box borderRadius={12} w="full" h="300px" bg="gray.300" />
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}>
        <Box borderRadius={12} w="full" h="300px" bg="gray.300" />
      </GridItem>
      <GridItem rowSpan={1} colSpan={4}>
        <Box borderRadius={12} w="full" h="300px" bg="gray.300" />
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}>
        <Box borderRadius={12} w="full" h="300px" bg="gray.300" />
      </GridItem>
      <GridItem rowSpan={1} colSpan={2}>
        <Box borderRadius={12} w="full" h="300px" bg="gray.300" />
      </GridItem>
      <GridItem rowSpan={1} colSpan={2}>
        <Box borderRadius={12} w="full" h="300px" bg="gray.300" />
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}>
        <Box borderRadius={12} w="full" h="300px" bg="gray.300" />
      </GridItem>
    </Grid>
  );
};

export default Dashboard;

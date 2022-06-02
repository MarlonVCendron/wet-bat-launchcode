import React from 'react';
import {
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  Select,
  Input,
  Button,
} from '@chakra-ui/react';
import { FastForward as FastForwardIcon } from '@mui/icons-material';

import Card from './Card';

const QuickQuote: React.FC = () => {
  return (
    <Card title="Quick quote" icon={FastForwardIcon}>
      <FormControl>
        <Grid
          templateRows="repeat(4, 1fr)"
          templateColumns="repeat(2, 1fr)"
          gap={4}
        >
          <GridItem rowSpan={1} colSpan={1}>
            <FormLabel htmlFor="from">From</FormLabel>
            <Input id="from" size="md" />
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}></GridItem>
          <GridItem rowSpan={1} colSpan={1}></GridItem>
          <GridItem rowSpan={1} colSpan={1}></GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <FormLabel htmlFor="country">Country</FormLabel>
            <Select id="country" placeholder="Select country">
              <option>United Arab Emirates</option>
              <option>Nigeria</option>
            </Select>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}></GridItem>
          <GridItem rowSpan={1} colSpan={1}></GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Button
              bg="brand.100"
              color="white"
              size="lg"
              w="full"
              h="full"
              borderRadius="50"
            >
              Create a quote
            </Button>
          </GridItem>
        </Grid>
      </FormControl>
    </Card>
  );
};

export default QuickQuote;

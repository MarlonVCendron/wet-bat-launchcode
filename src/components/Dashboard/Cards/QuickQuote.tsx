import React, { useState } from 'react';
import {
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  Select,
  Input,
  Button,
  Box,
} from '@chakra-ui/react';
import {
  FastForward as FastForwardIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
} from '@mui/icons-material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import Card from './Card';

const QuickQuote: React.FC = () => {
  const [returnDate, setReturnDate] = useState(new Date());
  const [departureDate, setDepartureDate] = useState(new Date());

  return (
    <Card title="Quick quote" icon={FastForwardIcon} expand>
      <FormControl>
        <Grid
          templateRows="repeat(4, 1fr)"
          templateColumns="repeat(2, 1fr)"
          gap={4}
        >
          <GridItem rowSpan={1} colSpan={1}>
            <Box bg="bg.400">
              <FormLabel htmlFor="from">From</FormLabel>
              <Input id="from" variant="dashboard" />
            </Box>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Box bg="bg.400">
              <FormLabel htmlFor="destination">Destination</FormLabel>
              <Input id="destination" variant="dashboard" />
            </Box>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Box bg="bg.400">
              <FormLabel htmlFor="departure_date">Departure date</FormLabel>
              <DatePicker
                selected={departureDate}
                onChange={(date) => setDepartureDate(date || new Date())}
                dateFormat="dd/MM/yyyy"
                customInput={<Input id="departure_date" variant="dashboard" />}
                portalId="root-portal"
              />
            </Box>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Box bg="bg.400">
              <FormLabel htmlFor="return_date">Return date</FormLabel>
              <DatePicker
                selected={returnDate}
                onChange={(date) => setReturnDate(date || new Date())}
                dateFormat="dd/MM/yyyy"
                customInput={<Input id="return_date" variant="dashboard" />}
                portalId="root-portal"
              />
            </Box>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Box bg="bg.400">
              <FormLabel htmlFor="people">People</FormLabel>
              <Select
                id="people"
                variant="dashboard"
                icon={<KeyboardArrowDownIcon />}
                iconColor="brand.100"
              >
                <option></option>
                <option>Person 1</option>
                <option>Person 2</option>
              </Select>
            </Box>
          </GridItem>{' '}
          <GridItem rowSpan={1} colSpan={1}>
            <Box bg="bg.400">
              <FormLabel htmlFor="transportation">Transportation</FormLabel>
              <Select
                id="transportation"
                variant="dashboard"
                icon={<KeyboardArrowDownIcon />}
                iconColor="brand.100"
              >
                <option></option>
                <option>Transportation 1</option>
                <option>Transportation 2</option>
              </Select>
            </Box>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Box bg="bg.400">
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input id="name" variant="dashboard" />
            </Box>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Button
              bg="brand.100"
              color="white"
              size="lg"
              w="full"
              h="full"
              borderRadius="50"
              _hover={{ bg: '#389f9b' }}
              _active={{ bg: '#1f8d89' }}
              _focus={{ boxShadow: 'none' }}
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

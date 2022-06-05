import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';

interface MetricsProps {
  value: string | number;
  children: React.ReactNode;
}

const Metrics: React.FC<MetricsProps> = ({ value, children }) => {
  return (
    <Flex>
      <Heading
        color="brand.400"
        as="h1"
        size="4xl"
        fontWeight="bold"
        textShadow="4px 4px 5px rgba(0,0,0,0.2)"
        textTransform="uppercase"
      >
        {value || '--'}
      </Heading>

      <Heading color="white" as="h3" size="lg" textTransform="uppercase" ml={4}>
        {children}
      </Heading>
    </Flex>
  );
};

export default Metrics;

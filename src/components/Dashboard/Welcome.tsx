import React from 'react';
import {
  Box,
  Center,
  Flex,
  Heading,
  Text,
  Image,
  Spacer,
} from '@chakra-ui/react';

import ClipArt from '../../images/clipart.png';

const WelcomeNumber: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <Heading
    color="brand.400"
    as="h1"
    size="4xl"
    fontWeight="bold"
    textShadow="4px 4px 5px rgba(0,0,0,0.2)"
  >
    {children}
  </Heading>
);

const WelcomeMetrics: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <Heading color="white" as="h3" size="lg" textTransform="uppercase" ml={2}>
    {children}
  </Heading>
);

const Welcome: React.FC = () => {
  return (
    <Box
      bgGradient="linear(100deg, brand.100, brand.600)"
      borderRadius={12}
      px={8}
      py={10}
      w="full"
      h="full"
    >
      <Flex justify="space-around">
        <Flex w="40%" direction="column" justify="center">
          <Heading as="h2" fontWeight="bold" size="2xl" color="white" mb={5}>
            Welcome to your Dashboard
          </Heading>
          <Text color="white" fontSize={20}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            orci enim, dapibus sit amet tortor in, consequat ornare dolor. Nulla
            facilisi. Morbi sagittis, felis quis fringilla vulputate, velit
            libero ullamcorper sapien, quis finibus ex felis a dolor. Mauris nec
            ligula lacus. Nullam sodales ultrices enim, non maximus magna varius
            et. Fusce dapibus, ex ac tempor pretium, velit sem semper enim, id
            suscipit est ligula vitae dolor. Aliquam dictum eros vel mauris
            tempus, non gravida turpis ultrices.
          </Text>
        </Flex>
        <Flex direction="column" justify="space-between" align="center">
          <Center>
            <Image w="30vw" src={ClipArt} />
          </Center>

          <Flex mt={6} alignItems="center" gap="4">
            <Flex>
              <WelcomeNumber>101</WelcomeNumber>
              <WelcomeMetrics>
                New
                <br />
                Leads
              </WelcomeMetrics>
            </Flex>
            <Spacer />
            <Flex>
              <WelcomeNumber>35</WelcomeNumber>
              <WelcomeMetrics>
                Quotes
                <br />
                Created
              </WelcomeMetrics>
            </Flex>
            <Spacer />
            <Flex>
              <WelcomeNumber>40</WelcomeNumber>
              <WelcomeMetrics>
                Pending
                <br />
                Orders
              </WelcomeMetrics>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Welcome;

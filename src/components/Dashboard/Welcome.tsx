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
import Metrics from '../Metrics';

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
      <Flex justify="space-around" direction={{ base: 'column', '2xl': 'row' }}>
        <Flex
          w={{ base: '100%', '2xl': '40%' }}
          direction="column"
          justify="center"
        >
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
        <Flex direction="column" justify="space-evenly" align="center">
          <Center>
            <Image w={{ base: '90%', md: '70%' }} src={ClipArt} />
          </Center>

          <Flex
            mt={6}
            alignItems="center"
            gap="4"
            direction={{ base: 'column', md: 'row' }}
          >
            <Metrics value={10}>
              New
              <br />
              Leads
            </Metrics>
            <Spacer />
            <Metrics value={74}>
              Quotes
              <br />
              Created
            </Metrics>
            <Spacer />
            <Metrics value={40}>
              Pending
              <br />
              Orders
            </Metrics>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Welcome;

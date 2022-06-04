import { Flex, Heading, Icon } from '@chakra-ui/react';
import React from 'react';
import WarningIcon from '@mui/icons-material/Warning';

interface ErrorProps {
  text?: string;
}

const Error: React.FC<ErrorProps> = ({ text }) => {
  return (
    <Flex
      pos="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      align="center"
      justify="center"
      width="full"
      p="5"
    >
      <Icon fontSize="32" color="red.300" as={WarningIcon} />
      <Heading ml="5" as="h3" size="lg" color="red.300">
        {text || 'An error occurred.'}
      </Heading>
    </Flex>
  );
};

export default Error;

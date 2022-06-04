import { Box, useToken } from '@chakra-ui/react';
import React from 'react';
import { PulseLoader } from 'react-spinners';

interface LoaderProps {
  loading: boolean;
  children: React.ReactElement;
}

const Loader: React.FC<LoaderProps> = ({ loading, children }) => {
  const brand100 = useToken('colors', 'brand.100');

  return loading ? (
    <Box
      pos="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      p="5"
    >
      <PulseLoader loading size={20} color={brand100} />
    </Box>
  ) : (
    children
  );
};

export default Loader;

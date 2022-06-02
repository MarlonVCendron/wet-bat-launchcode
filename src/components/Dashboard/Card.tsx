import React from 'react';
import { Box, Icon, Flex, Heading, Spacer, Divider } from '@chakra-ui/react';
import { OpenWith as OpenWithIcon } from '@mui/icons-material';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

interface CardProps {
  title: string;
  icon: OverridableComponent<SvgIconTypeMap>;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, icon, children }) => {
  return (
    <Box
      borderRadius={12}
      border="2px"
      borderColor="gray.300"
      bg="white"
      w="full"
      h="full"
    >
      <Flex align="center" px={4} py={6}>
        <Icon fontSize="32" color="brand.100" as={icon} />
        <Heading as="h4" size="md" color="primary" ml={4}>
          {title}
        </Heading>
        <Spacer />
        <Icon fontSize="32" color="gray.300" as={OpenWithIcon} />
      </Flex>
      <Divider />
      <Box p={4}>{children}</Box>
    </Box>
  );
};

export default Card;

import React from 'react';
import { Box, Icon, Flex, Heading, Spacer, Divider } from '@chakra-ui/react';
import {
  OpenWith as OpenWithIcon,
  MoreVert as MoreVertIcon,
  Replay as ReplayIcon,
} from '@mui/icons-material';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

interface CardProps {
  title: string;
  p?: number;
  icon: OverridableComponent<SvgIconTypeMap>;
  expand?: boolean;
  reload?: boolean;
  threeDots?: boolean;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  icon,
  p,
  expand,
  reload,
  threeDots,
  children,
}) => {
  return (
    <Flex
      direction="column"
      borderRadius={12}
      border="2px"
      borderColor="gray.300"
      bg="white"
      w="full"
      height="full"
    >
      <Flex align="center" px={4} py={6}>
        <Icon fontSize="32" color="brand.100" as={icon} />
        <Heading as="h4" size="md" color="primary" ml={4}>
          {title}
        </Heading>
        <Spacer />
        {reload && (
          <Icon ml="2" fontSize="32" color="gray.300" as={ReplayIcon} />
        )}
        {expand && (
          <Icon ml="2" fontSize="32" color="gray.300" as={OpenWithIcon} />
        )}
        {threeDots && (
          <Icon ml="2" fontSize="32" color="gray.300" as={MoreVertIcon} />
        )}
      </Flex>
      <Divider />
      <Box p={p != null ? p : 4} overflowY="auto">
        {children}
      </Box>
    </Flex>
  );
};

export default Card;

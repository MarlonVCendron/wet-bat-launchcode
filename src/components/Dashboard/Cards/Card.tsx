import React from 'react';
import {
  Box,
  Icon,
  Flex,
  Heading,
  Spacer,
  Divider,
  IconButton,
} from '@chakra-ui/react';
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
  threeDots?: boolean;
  onReload?: () => void;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  icon,
  p,
  expand,
  threeDots,
  onReload,
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
        {!!onReload && (
          <IconButton
            aria-label="reload"
            variant="link"
            _focus={{ boxShadow: 'none' }}
            onClick={onReload}
            icon={
              <Icon
                ml="2"
                fontSize="32"
                color="gray.300"
                as={ReplayIcon}
                _hover={{ color: 'gray.500' }}
                transition="color 0.2s"
              />
            }
          />
        )}
        {expand && (
          <IconButton
            aria-label="expand"
            variant="link"
            _focus={{ boxShadow: 'none' }}
            onClick={() => {}}
            icon={
              <Icon ml="2" fontSize="32" color="gray.300" as={OpenWithIcon} />
            }
          />
        )}
        {threeDots && (
          <IconButton
            aria-label="more"
            variant="link"
            _focus={{ boxShadow: 'none' }}
            onClick={() => {}}
            icon={
              <Icon ml="2" fontSize="32" color="gray.300" as={MoreVertIcon} />
            }
          />
        )}
      </Flex>
      <Divider />
      <Box
        p={p != null ? p : 4}
        overflowY="auto"
        pos="relative"
        height="full"
        minH="100"
      >
        {children}
      </Box>
    </Flex>
  );
};

export default Card;

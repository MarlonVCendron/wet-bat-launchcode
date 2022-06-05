import React from 'react';
import { Flex, Icon, Link, Text } from '@chakra-ui/react';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { Link as ReactRouterLink } from 'react-router-dom';

interface NavItemProps {
  to: string;
  icon: OverridableComponent<SvgIconTypeMap>;
  onClick: () => void;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, onClick, children }) => {
  return (
    <Link
      as={ReactRouterLink}
      to={to}
      onClick={onClick}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align="center"
        px="2"
        py="6"
        cursor="pointer"
        _hover={{
          bg: 'bg.300',
        }}
        transition="background-color 200ms linear"
      >
        <Icon mx="4" fontSize="24" color="brand.200" as={icon} />

        <Text color="primary" fontWeight="bold">
          {children}
        </Text>
      </Flex>
    </Link>
  );
};

export default NavItem;

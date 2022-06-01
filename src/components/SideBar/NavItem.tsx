import React from 'react';
import {
  Flex,
  Icon,
  Link,
  Text,
} from '@chakra-ui/react';
import {SvgIconTypeMap} from '@mui/material';
import {OverridableComponent} from '@mui/material/OverridableComponent';

interface NavItemProps {
  href: string;
  icon: OverridableComponent<SvgIconTypeMap>,
  children: React.ReactNode;
}

const NavItem : React.FC<NavItemProps> = ({ href, icon, children }) => {
  return (
    <Link href={href} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
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
        <Icon
          mx="4"
          fontSize="24"
          color="primary"
          as={icon}
        />

        <Text color="primary" fontWeight="bold">
          {children}
        </Text>
      </Flex>
    </Link>
  );
};

export default NavItem;

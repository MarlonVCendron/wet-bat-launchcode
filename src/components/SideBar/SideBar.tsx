import React from 'react';
import { Box, useColorModeValue, Divider, Text } from '@chakra-ui/react';

import items from './items';
import NavItem from './NavItem';

interface SideBarProps {
  width: number;
  navBarHeight: number;
}

const SideBar: React.FC<SideBarProps> = ({ width, navBarHeight }) => {
  return (
    <Box
      as="nav"
      pos="fixed"
      bg={useColorModeValue('bg.200', 'gray.700')}
      overscrollBehavior="contain"
      top={navBarHeight}
      left="0"
      h={`calc(100% - ${navBarHeight}px)`}
      width={width}
      flexShrink={0}
      zIndex={1000}
    >
      {items.map((item) => (
        <React.Fragment key={item.text}>
          <NavItem href={item.href} icon={item.icon}>
            {item.text}
          </NavItem>

          {item.divider && <Divider />}
        </React.Fragment>
      ))}

      <Divider />

      <Text align="center" fontSize="14" m={8} color="gray.500">
        All rights reserved by Wet Bat 2022 ©
      </Text>
    </Box>
  );

  //  return (
  //    <Box minH="100vh" bg={useColorModeValue('bg.200', 'gray.900')}>
  //      <Drawer
  //        autoFocus={false}
  //        isOpen={isOpen}
  //        placement="left"
  //        returnFocusOnClose={false}
  //        size="full"
  //        onClose={() => {}}
  //        blockScrollOnMount={false}
  //        trapFocus={false}
  //      >
  //        <DrawerContent>
  //          <DrawerBody>
  //            <Box
  //              bg={useColorModeValue('white', 'gray.900')}
  //              borderRightColor={useColorModeValue('gray.200', 'gray.700')}
  //              borderRight="1px"
  //              w={{ base: 'full', md: 60 }}
  //              pos="fixed"
  //            >
  //              {items.map((item) => (
  //                <React.Fragment key={item.text}>
  //                  <NavItem href={item.href} icon={item.icon}>
  //                    {item.text}
  //                  </NavItem>
  //                  { item.divider && <Divider /> }
  //                </React.Fragment>
  //              ))}
  //            </Box>
  //            </DrawerBody>
  //
  //          <DrawerFooter>
  //            <Text align="center" fontSize="14" m={8} color="gray.500">
  //              All rights reserved by Wet Bat 2022 ©
  //            </Text>
  //          </DrawerFooter>
  //        </DrawerContent>
  //        </Drawer>
  //    </Box>
  //  );
};

export default SideBar;

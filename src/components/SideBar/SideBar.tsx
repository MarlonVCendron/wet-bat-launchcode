import React, { useContext } from 'react';
import { Box, Divider, Text, Drawer, DrawerContent } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';

import { RootContext } from '../../store/useStore';
import items from './items';
import NavItem from './NavItem';

interface SideBarProps {
  navBarHeight: number;
}

const SideBar: React.FC<SideBarProps> = observer(({ navBarHeight }) => {
  const { sideBarStore } = useContext(RootContext);

  return (
    <Drawer
      isOpen={sideBarStore.isOpen}
      placement="left"
      onClose={sideBarStore.close}
      isFullHeight={false}
    >
      <DrawerContent>
        <Box
          bg="white"
          borderRight="1px"
          borderRightColor="gray.200"
          w="full"
          mt={navBarHeight}
          boxShadow="2px 0 2px 0 rgba(0, 0, 0, 0.2)"
        >
          {items.map((item) => (
            <React.Fragment key={item.text}>
              <NavItem href={item.href} icon={item.icon}>
                {item.text}
              </NavItem>
              {item.divider && <Divider />}
            </React.Fragment>
          ))}
        </Box>

        <Text align="center" fontSize="14" m={8} color="gray.500">
          All rights reserved by Wet Bat 2022 ©
        </Text>
      </DrawerContent>
    </Drawer>
  );
});

export default SideBar;

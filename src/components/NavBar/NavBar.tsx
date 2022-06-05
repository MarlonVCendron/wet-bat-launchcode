import React, { useContext } from 'react';
import { Box, Flex, HStack, Image, Link } from '@chakra-ui/react';
import {
  ChatBubble as ChatBubbleIcon,
  Notifications as NotificationsIcon,
  Settings as SettingsIcon,
  Dashboard as DashboardIcon,
} from '@mui/icons-material';
import { Link as ReactRouterLink } from 'react-router-dom';

//import { MobileNavButton, MobileNavContent } from './mobile-nav'

import { RootContext } from '../../store/useStore';
import NavIcon from './NavIcon';
import Search from './Search';
import { default as BigLogo } from '../../images/wet-bat-white.svg';
import { default as SmallLogo } from '../../images/logo-white.svg';

interface NavBarProps {
  height: number;
}

const NavBar: React.FC<NavBarProps> = ({ height }) => {
  const { sideBarStore } = useContext(RootContext);

  return (
    <Box
      as="header"
      transition="box-shadow 0.2s, background-color 0.2s"
      pos="fixed"
      top="0"
      zIndex="1700"
      bg="primary"
      left="0"
      right="0"
      width="full"
      height={height}
    >
      <Flex w="100%" h="100%" px="6" align="center" justify="space-between">
        <NavIcon
          aria_label="Sidebar"
          icon={DashboardIcon}
          onClick={sideBarStore.toggle}
          size="10"
        />

        <Flex align="center">
          <Link as={ReactRouterLink} to="/" _focus={{ boxShadow: 'none' }}>
            <Image
              mx={4}
              src={SmallLogo}
              alt="Wet Bat Travel"
              sx={{
                '@media screen and (min-width: 30em)': {
                  content: `url(${BigLogo})`,
                },
              }}
            />
          </Link>
        </Flex>

        <Flex justify="flex-end" w="100%" align="center">
          <Search />

          <HStack spacing="5" ml={5} display={{ base: 'none', md: 'flex' }}>
            <NavIcon aria_label="Notifications" icon={NotificationsIcon} />
            <NavIcon aria_label="Messages" icon={ChatBubbleIcon} />
            <NavIcon aria_label="Settings" icon={SettingsIcon} />
          </HStack>
          {/*<HStack spacing='5'>
            <MobileNavButton
              ref={mobileNavBtnRef}
              aria-label='Open Menu'
              onClick={mobileNav.onOpen}
            />
          </HStack>*/}
        </Flex>
      </Flex>
      {/*<MobileNavContent isOpen={mobileNav.isOpen} onClose={mobileNav.onClose} />*/}
    </Box>
  );
};

export default NavBar;

import React from 'react';
import {
  Box,
  Flex,
  HStack,
  Image,
  Link,
} from '@chakra-ui/react'
import {
  ChatBubble as ChatBubbleIcon,
  Notifications as NotificationsIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';

//import { MobileNavButton, MobileNavContent } from './mobile-nav'
//import Search from './omni-search'

import NavIcon from './NavIcon';
import Search from './Search';
import { default as BigLogo }  from '../../images/wet-bat-white.svg';
import { default as SmallLogo }  from '../../images/logo-white.svg';

const NavBar : React.FC = () => {
  return (
    <Box
      as="header"
      transition='box-shadow 0.2s, background-color 0.2s'
      pos='sticky'
      top='0'
      zIndex='3'
      bg='primary'
      left='0'
      right='0'
      width='full'
    >
      <Box mx='auto'>
        <Flex w='100%' h='100%' px='6' align='center' justify='space-between'>
        <Flex align='center'>
          <Link href='/'>
            <Image
              m={2}
              src={false ? SmallLogo : BigLogo }
              alt="Wet Bat Travel"
             />
          </Link>
        </Flex>

        <Flex
          justify='flex-end'
          w='100%'
          align='center'
        >
          <Search />

          <HStack spacing='5' ml={5} display={{ base: 'none', md: 'flex' }}>
            <NavIcon aria_label="Notifications" icon={NotificationsIcon}/>
            <NavIcon aria_label="Messages" icon={ChatBubbleIcon}/>
            <NavIcon aria_label="Settings" icon={SettingsIcon}/>
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
    </Box>
  )
}

export default NavBar;

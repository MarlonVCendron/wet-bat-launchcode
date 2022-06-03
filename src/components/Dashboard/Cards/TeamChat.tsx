import React from 'react';
import {
  MailOutline as MailOutlineIcon,
  Message as MessageIcon,
} from '@mui/icons-material';
import {
  Box,
  Flex,
  Text,
  Spacer,
  Link,
  Icon,
  Avatar,
  AvatarBadge,
} from '@chakra-ui/react';

import Card from './Card';
import profilePicMarlon from '../../../images/profile_marlon.jpg';

interface chatType {
  profilePic: string;
  name: string;
  message: string;
  status: 'online' | 'away' | 'offline';
}

const chatsList: chatType[] = [
  {
    profilePic: profilePicMarlon,
    name: 'Marlon Cendron',
    message: 'Hii! Please hire me!',
    status: 'online',
  },
  {
    profilePic: 'https://bit.ly/dan-abramov',
    name: 'Random Person',
    message: 'Hey! I want to place my package',
    status: 'offline',
  },
  {
    profilePic: 'https://bit.ly/dan-abramov',
    name: 'Random Person',
    message: 'Hey! I want to place my package',
    status: 'away',
  },
];

const statusColor = {
  online: 'green.300',
  away: 'yellow.300',
  offline: 'gray.400',
};

const TeamChat: React.FC = () => {
  return (
    <Card title="Team chat" icon={MailOutlineIcon} threeDots>
      {chatsList.map((chat, index) => (
        <Link
          key={index}
          href="/"
          role="group"
          style={{ textDecoration: 'none' }}
          _focus={{ boxShadow: 'none' }}
        >
          <Flex
            align="center"
            p={2}
            borderRadius={8}
            _hover={{ bg: 'gray.200' }}
            _groupFocus={{ bg: 'gray.300' }}
            transition="background-color 200ms linear"
          >
            <Avatar w="64px" h="64px" src={chat.profilePic} borderRadius={8}>
              <AvatarBadge boxSize="1em" bg={statusColor[chat.status]} />
            </Avatar>

            <Box px={2}>
              <Text
                noOfLines={1}
                fontSize="18"
                color="gray.600"
                fontWeight="bold"
              >
                {chat.name}
              </Text>
              <Text noOfLines={1} fontSize="16" color="gray.400">
                {chat.message}
              </Text>
            </Box>
            <Spacer />
            <Icon w="8" h="8" color="brand.100" as={MessageIcon} />
          </Flex>
        </Link>
      ))}
    </Card>
  );
};

export default TeamChat;

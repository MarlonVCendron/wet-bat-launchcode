import React from 'react';
import { MailOutline as MailOutlineIcon } from '@mui/icons-material';
import { Box, Flex, Text, Spacer, Link, Avatar } from '@chakra-ui/react';

import Card from './Card';
import profilePicMarlon from '../../../images/profile_marlon.jpg';

interface newLeadType {
  profilePic: string;
  name: string;
  message: string;
  time: string;
}

const newLeadsList: newLeadType[] = [
  {
    profilePic: profilePicMarlon,
    name: 'Marlon Cendron',
    message: 'Hii! Please hire me!',
    time: '13:40 PM',
  },
  {
    profilePic: 'https://bit.ly/dan-abramov',
    name: 'Random Person',
    message: 'Hey! I want to place my package',
    time: '13:40 PM',
  },
  {
    profilePic: 'https://bit.ly/dan-abramov',
    name: 'Random Person',
    message: 'Hey! I want to place my package',
    time: '13:40 PM',
  },
  {
    profilePic: 'https://bit.ly/dan-abramov',
    name: 'Random Person',
    message: 'Hey! I want to place my package',
    time: '13:40 PM',
  },
  {
    profilePic: 'https://bit.ly/dan-abramov',
    name: 'Random Person',
    message: 'Hey! I want to place my package',
    time: '13:40 PM',
  },
  {
    profilePic: 'https://bit.ly/dan-abramov',
    name: 'Random Person',
    message: 'Hey! I want to place my package',
    time: '13:40 PM',
  },
];

const NewLeads: React.FC = () => {
  return (
    <Card title="New leads" icon={MailOutlineIcon} maxH="400px">
      {newLeadsList.map((lead) => (
        <Link
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
            <Avatar src={lead.profilePic} borderRadius="full" boxSize="64px" />
            <Box px={2}>
              <Text
                noOfLines={1}
                fontSize="18"
                color="gray.600"
                fontWeight="bold"
              >
                {lead.name}
              </Text>
              <Text noOfLines={1} fontSize="16" color="gray.400">
                {lead.message}
              </Text>
            </Box>
            <Spacer />
            <Text
              noOfLines={1}
              fontSize="16"
              color="gray.500"
              alignSelf="start"
            >
              {lead.time}
            </Text>
          </Flex>
        </Link>
      ))}
    </Card>
  );
};

export default NewLeads;

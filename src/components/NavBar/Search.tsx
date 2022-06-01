import React from 'react';
import { Center, Flex, Icon, Input } from '@chakra-ui/react';
import SearchIcon from '@mui/icons-material/Search';

const Search : React.FC = () => {
  const [query, setQuery] = React.useState('')
  const height = '32px';

  return (
    <Flex pos='relative' align='stretch'>
      <Input
        autoCorrect='off'
        spellCheck='false'
        sx={{
          w: '100%',
          pl: height,
          h: height,
          fontWeight: 'medium',
          color: 'gray.500',
          outline: 0,
          bg: 'white',
          '.chakra-ui-dark &': { bg: 'gray.700' },
        }}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Center pos='absolute' left={3} h={height} zIndex={1}>
        <Icon
          w={6}
          h={6}
          color="gray.500"
          as={SearchIcon}
        />
      </Center>
    </Flex>
  )
}

export default Search

import React from 'react';
import { Icon, IconButton } from '@chakra-ui/react'
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

interface NavIconProps {
  aria_label: string;  
  icon: OverridableComponent<SvgIconTypeMap>;  
}

const NavIcon : React.FC<NavIconProps> = ({aria_label, icon}) => (
  <IconButton
    aria-label={aria_label}
    variant="link"
    _focus={{ boxShadow: 'none' }}
    icon={
      <Icon
        display='block'
        transition='color 0.2s'
        w='6'
        h='6'
        color="gray.200"
        _hover={{ color: 'white' }}
        as={icon}
      />
    }
  />
);

export default NavIcon;

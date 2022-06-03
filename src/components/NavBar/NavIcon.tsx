import React, { MouseEventHandler } from 'react';
import { Icon, IconButton } from '@chakra-ui/react';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

interface NavIconProps {
  aria_label: string;
  icon: OverridableComponent<SvgIconTypeMap>;
  size?: string;
  onClick?: MouseEventHandler;
}

const NavIcon: React.FC<NavIconProps> = ({
  aria_label,
  icon,
  size,
  onClick,
}) => (
  <IconButton
    aria-label={aria_label}
    variant="link"
    _focus={{ boxShadow: 'none' }}
    onClick={onClick}
    icon={
      <Icon
        display="block"
        transition="color 0.2s"
        w={size || 6}
        h={size || 6}
        color="gray.200"
        _hover={{ color: 'white' }}
        as={icon}
      />
    }
  />
);

export default NavIcon;

import React from 'react';
import {
  Box,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Icon,
  Typography,
} from '@mui/material';
import { grey } from '@mui/material/colors';

import items from './items';

interface SideBarProps {
  open: boolean;
}

const SideBar : React.FC<SideBarProps> = ({ open }) => (
  <Drawer
    anchor="left"
    open={open}
    variant="persistent"
  >
    <Box sx={{ width: 250 }}>
      <List>
        {items.map(({ text, icon, route, divider}, index) => {
          if(divider) return <Divider key={`divider${index}`} />
          return (
            <ListItem key={text}>
              <ListItemButton>
                <ListItemIcon>
                  <Icon>{icon}</Icon>
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      <Divider />

      <Typography
        variant="body2"
        sx={{
          m: '2rem',
          textAlign: 'center',
          color: grey[700],
        }}
      >
        All rights reserved by Wet Bat 2022 ©
      </Typography>
    </Box>
  </Drawer>
);

export default SideBar;


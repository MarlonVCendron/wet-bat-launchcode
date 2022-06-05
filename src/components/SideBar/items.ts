import {
  Home,
  AttachMoney,
  ListAlt,
  Telegram,
  InsertDriveFile,
  Timeline,
  Group,
  Settings,
  Support,
} from '@mui/icons-material';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

interface itemsLayout {
  text: string;
  icon: OverridableComponent<SvgIconTypeMap>;
  to: string;
  divider: boolean;
}

const items: itemsLayout[] = [
  {
    text: 'Home',
    icon: Home,
    to: '/',
    divider: false,
  },
  {
    text: 'Quotes',
    icon: AttachMoney,
    to: '/quotes',
    divider: false,
  },
  {
    text: 'Leads',
    icon: ListAlt,
    to: '/',
    divider: false,
  },
  {
    text: 'Tours',
    icon: Telegram,
    to: '/',
    divider: true,
  },
  {
    text: 'Invoices',
    icon: InsertDriveFile,
    to: '/',
    divider: false,
  },
  {
    text: 'Analytics',
    icon: Timeline,
    to: '/',
    divider: false,
  },
  {
    text: 'Team',
    icon: Group,
    to: '/',
    divider: false,
  },
  {
    text: 'Admin',
    icon: Settings,
    to: '/',
    divider: false,
  },
  {
    text: 'Support',
    icon: Support,
    to: '/',
    divider: false,
  },
];

export default items;

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
import {SvgIconTypeMap} from '@mui/material';
import {OverridableComponent} from '@mui/material/OverridableComponent';

interface itemsLayout {
    text: string,
    icon: OverridableComponent<SvgIconTypeMap>,
    href: string,
    divider: boolean,
}

const items : itemsLayout[] = [
  {
    text: 'Home',
    icon: Home,
    href: '/',
    divider: false,
  },
  {
    text: 'Quotes',
    icon: AttachMoney,
    href: '/',
    divider: false,
  },
  {
    text: 'Leads',
    icon: ListAlt,
    href: '/',
    divider: false,
  },
  {
    text: 'Tours',
    icon: Telegram,
    href: '/',
    divider: true,
  },
  {
    text: 'Invoices',
    icon: InsertDriveFile,
    href: '/',
    divider: false,
  },
  {
    text: 'Analytics',
    icon: Timeline,
    href: '/',
    divider: false,
  },
  {
    text: 'Team',
    icon: Group,
    href: '/',
    divider: false,
  },
  {
    text: 'Admin',
    icon: Settings,
    href: '/',
    divider: false,
  },
  {
    text: 'Support',
    icon: Support,
    href: '/',
    divider: false,
  },
];

export default items;

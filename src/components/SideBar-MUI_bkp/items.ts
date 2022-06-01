interface itemsLayout {
    text: string | null,
    icon: string | null,
    route: string | null,
    divider: boolean,
}

const items : itemsLayout[] = [
  {
    text: 'Home',
    icon: 'home',
    route: '/',
    divider: false,
  },
  {
    text: 'Quotes',
    icon: 'attach_money',
    route: '/',
    divider: false,
  },
  {
    text: 'Leads',
    icon: 'show_chart',
    route: '/',
    divider: false,
  },
  {
    text: 'Tours',
    icon: 'send',
    route: '/',
    divider: false,
  },
  {
    text: null,
    icon: null,
    route: null,
    divider: true,
  },
  {
    text: 'Invoices',
    icon: 'insert_drive_file',
    route: '/',
    divider: false,
  },
  {
    text: 'Analytics',
    icon: 'timeline',
    route: '/',
    divider: false,
  },
  {
    text: 'Team',
    icon: 'group',
    route: '/',
    divider: false,
  },
  {
    text: 'Admin',
    icon: 'settings',
    route: '/',
    divider: false,
  },
  {
    text: 'Support',
    icon: 'support',
    route: '/',
    divider: false,
  },
];

export default items;

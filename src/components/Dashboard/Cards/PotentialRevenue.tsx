import React from 'react';
import { MailOutline as MailOutlineIcon } from '@mui/icons-material';

import Card from './Card';

const NewLeads: React.FC = () => {
  return <Card title="New leads" icon={MailOutlineIcon}></Card>;
};

export default NewLeads;

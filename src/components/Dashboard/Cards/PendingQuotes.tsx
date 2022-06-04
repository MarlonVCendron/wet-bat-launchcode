import React, { useEffect, useContext } from 'react';
import MaterialTable from 'material-table';
import { History as HistoryIcon } from '@mui/icons-material';
import { observer } from 'mobx-react-lite';
import { ThemeProvider, createTheme } from '@mui/material';
import { Shadows } from '@mui/material/styles/shadows';

import Card from './Card';
import Loader from '../../Loader';
import Error from '../../Error';
import { RootContext } from '../../../store/useStore';

const columns = [
  {
    title: 'NAME',
    field: 'name',
    type: 'string',
  },
  {
    title: 'DESTINATION',
    field: 'destination_loc',
    type: 'string',
  },
  {
    title: 'DEPARTURE DATE',
    field: 'departure_date',
    type: 'date',
  },
  {
    title: 'PEOPLE',
    field: 'people',
    type: 'string',
  },
];

const PendingQuotes: React.FC = observer(() => {
  const materialTheme = createTheme({
    shadows: Array(25).fill('none') as Shadows,
  });

  const {
    quotesStore: { loadQuotes, quotes, error, loading },
  } = useContext(RootContext);

  useEffect(() => {
    loadQuotes();
  }, []);

  return (
    <Card title="Pending quotes" icon={HistoryIcon} reload expand>
      <Loader loading={loading}>
        {error ? (
          <Error text="Error loading quotes." />
        ) : (
          <ThemeProvider theme={materialTheme}>
            <MaterialTable
              title="Pending quotes"
              data={quotes}
              columns={columns}
              elevation={0}
            />
          </ThemeProvider>
        )}
      </Loader>
    </Card>
  );
});

export default PendingQuotes;

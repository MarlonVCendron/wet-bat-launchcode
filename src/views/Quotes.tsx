import React, { useEffect, useContext, useState } from 'react';
import MaterialTable from 'material-table';
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';
import { observer } from 'mobx-react-lite';
import { ThemeProvider, createTheme } from '@mui/material';
import { Shadows } from '@mui/material/styles/shadows';
import { Icon, Box, Center, Flex, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import Loader from '../components/Loader';
import Error from '../components/Error';
import { RootContext } from '../store/useStore';
import DefaultLayout from '../layouts/Default';
import Metrics from '../components/Metrics';
import { IQuote } from '../services/quotesService';
import ModalDelete from '../components/ModalDelete';

const Quotes: React.FC = observer(() => {
  const [quoteToDelete, setQuoteToDelete] = useState<IQuote | null>(null);
  const navigate = useNavigate();
  const materialTheme = createTheme({
    shadows: Array(25).fill('none') as Shadows,
  });

  const {
    quotesStore: { loadQuotes, deleteQuoteAction, quotes, error, loading },
  } = useContext(RootContext);

  useEffect(() => {
    loadQuotes();
  }, []);

  const handleDelete = async () => {
    if (!quoteToDelete) return;
    await deleteQuoteAction(quoteToDelete);
    setQuoteToDelete(null);
    loadQuotes();
  };

  return (
    <DefaultLayout>
      <ModalDelete
        text={`Quote ${quoteToDelete?.name}`}
        isOpen={!!quoteToDelete}
        onClose={() => setQuoteToDelete(null)}
        onDelete={handleDelete}
      />

      <Box p="5" h="full">
        <Flex
          bgGradient="linear(100deg, brand.100, brand.600)"
          px="8"
          py="4"
          borderRadius={12}
          justify="space-between"
          align="center"
          direction={{ base: 'column', md: 'row' }}
        >
          <Heading as="h1" size="4xl" noOfLines={1} color="white" py="4">
            Quotes
          </Heading>
          <Center>
            <Metrics value={quotes?.length}>
              Total
              <br />
              Quotes
            </Metrics>
          </Center>
        </Flex>

        <Box p="5" pos="relative" h="full" minH="50vh">
          <Loader loading={loading}>
            {error ? (
              <Error text="Error loading quotes." />
            ) : (
              <ThemeProvider theme={materialTheme}>
                <MaterialTable
                  title="Quotes"
                  data={quotes}
                  columns={[
                    {
                      title: 'ID',
                      field: 'id',
                      type: 'string',
                      hidden: true,
                    },
                    {
                      title: 'NAME',
                      field: 'name',
                      type: 'string',
                    },
                    {
                      title: 'DEPARTURE',
                      field: 'departure_loc',
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
                      title: 'RETURN DATE',
                      field: 'return_date',
                      type: 'date',
                    },
                    {
                      title: 'TRANSPORTATION',
                      field: 'transportation',
                      type: 'string',
                    },
                    {
                      title: 'PEOPLE',
                      field: 'people',
                      type: 'string',
                    },
                  ]}
                  actions={[
                    {
                      icon: () => <Icon color="gray" as={EditIcon} />,
                      tooltip: 'Edit quote',
                      onClick: (event, quote) => navigate(`/quote/${quote.id}`),
                    },
                    {
                      icon: () => <Icon color="#c53030" as={DeleteIcon} />,
                      tooltip: 'Delete quote',
                      onClick: (event, quote) => setQuoteToDelete(quote),
                    },
                  ]}
                  options={{
                    showTitle: false,
                  }}
                />
              </ThemeProvider>
            )}
          </Loader>
        </Box>
      </Box>
    </DefaultLayout>
  );
});

export default Quotes;

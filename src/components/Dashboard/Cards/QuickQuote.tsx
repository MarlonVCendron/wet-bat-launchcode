import React, { useContext } from 'react';
import {
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  FormErrorMessage,
} from '@chakra-ui/react';
import { FastForward as FastForwardIcon } from '@mui/icons-material';
import { Field, Form, Formik, FormikProps } from 'formik';

import Card from './Card';
import { RootContext } from '../../../store/useStore';
import { IQuote } from '../../../services/quotesService';

const fields = [
  {
    label: 'From',
    name: 'departure_loc',
    type: 'text',
  },
  {
    label: 'Destination',
    name: 'destination_loc',
    type: 'text',
  },
  {
    label: 'Departure  date',
    name: 'departure_date',
    type: 'date',
  },
  {
    label: 'Return date',
    name: 'return_date',
    type: 'date',
  },
  {
    label: 'People',
    name: 'people',
    type: 'number',
  },
  {
    label: 'Transportation',
    name: 'transportation',
    type: 'text',
  },
  {
    label: 'Name',
    name: 'name',
    type: 'text',
  },
];

const QuickQuote: React.FC = () => {
  const {
    quotesStore: { sendQuote },
  } = useContext(RootContext);

  return (
    <Card title="Quick quote" icon={FastForwardIcon} expand>
      <Formik
        initialValues={{
          departure_loc: '',
          destination_loc: '',
          return_date: new Date(),
          departure_date: new Date(),
          people: 0,
          name: '',
        }}
        onSubmit={async (values: IQuote, actions) => {
          await sendQuote(values);
          actions.setSubmitting(false);
        }}
      >
        {(props: FormikProps<any>) => (
          <Form style={{ height: '100%' }}>
            <Grid
              templateRows="repeat(4, 1fr)"
              templateColumns="repeat(2, minmax(0, 1fr))"
              gap={4}
              width="full"
              height="full"
            >
              {fields.map((field, index) => (
                <GridItem
                  rowSpan={1}
                  colSpan={1}
                  key={`input-${index}-${field.name}`}
                >
                  <Field name={field.name}>
                    {({ field: formikField, form }) => (
                      <FormControl
                        isInvalid={form.errors.name && form.touched.name}
                        isRequired
                      >
                        <Box bg="bg.400">
                          <FormLabel htmlFor={`input-${index}-${field.name}`}>
                            {field.label}
                          </FormLabel>
                          <Input
                            {...formikField}
                            type={field.type}
                            id={`input-${index}-${field.name}`}
                            variant="dashboard"
                          />
                        </Box>
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </GridItem>
              ))}
              <GridItem rowSpan={1} colSpan={1}>
                <Button
                  bg="brand.100"
                  color="white"
                  size="lg"
                  w="full"
                  h="full"
                  borderRadius="50"
                  isLoading={props.isSubmitting}
                  type="submit"
                  _hover={{ bg: '#389f9b' }}
                  _active={{ bg: '#1f8d89' }}
                  _focus={{ boxShadow: 'none' }}
                >
                  Create a quote
                </Button>
              </GridItem>
            </Grid>
          </Form>
        )}
      </Formik>
    </Card>
  );
};

export default QuickQuote;

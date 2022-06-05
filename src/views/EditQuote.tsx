import React, { useContext, useEffect } from 'react';
import {
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  FormErrorMessage,
  Heading,
  Divider,
  Flex,
} from '@chakra-ui/react';
import { Field, Form, Formik, FormikProps } from 'formik';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

import DefaultLayout from '../layouts/Default';
import { RootContext } from '../store/useStore';
import { IQuote } from '../services/quotesService';
import quoteFields from '../utils/quoteFields';
import Loader from '../components/Loader';
import { observer } from 'mobx-react-lite';

const EditQuote: React.FC = observer(() => {
  const navigate = useNavigate();
  const { quoteId } = useParams();
  const {
    quotesStore: {
      loadQuoteToEdit,
      updateQuoteAction,
      editQuote,
      loading,
      error,
    },
  } = useContext(RootContext);

  useEffect(() => {
    loadQuoteToEdit(quoteId);
  }, []);

  useEffect(() => {
    if (error) {
      navigate('/quotes');
      toast.error('Error loading quote');
    }
  }, [error]);

  return (
    <DefaultLayout>
      <Box p="5" h="full">
        <Heading as="h2" size="2xl" noOfLines={1} p="5" color="brand.200">
          Edit Quote
        </Heading>

        <Divider />

        <Box p="5" minH="400px">
          <Loader loading={loading}>
            <Formik
              initialValues={
                editQuote || {
                  departure_loc: '',
                  destination_loc: '',
                  return_date: new Date(),
                  departure_date: new Date(),
                  people: 0,
                  name: '',
                }
              }
              onSubmit={async (values: IQuote, actions) => {
                await updateQuoteAction({ ...values, id: editQuote?.id });
                actions.setSubmitting(false);
                navigate('/quotes');
              }}
            >
              {(props: FormikProps<any>) => (
                <Form style={{ height: '100%' }}>
                  <Grid
                    templateRows="repeat(2, 1fr)"
                    templateColumns="repeat(4, minmax(0, 1fr))"
                    gap={4}
                    width="full"
                    height="full"
                  >
                    {quoteFields.map((field, index) => (
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
                                <FormLabel
                                  htmlFor={`input-${index}-${field.name}`}
                                >
                                  {field.label}
                                </FormLabel>
                                <Input
                                  {...formikField}
                                  type={field.type}
                                  id={`input-${index}-${field.name}`}
                                  variant="dashboard"
                                />
                              </Box>
                              <FormErrorMessage>
                                {form.errors.name}
                              </FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                      </GridItem>
                    ))}
                  </Grid>
                  <Flex>
                    <Button
                      my={5}
                      ml="auto"
                      bg="brand.100"
                      color="white"
                      size="lg"
                      isLoading={props.isSubmitting}
                      type="submit"
                      _hover={{ bg: '#389f9b' }}
                      _active={{ bg: '#1f8d89' }}
                      _focus={{ boxShadow: 'none' }}
                    >
                      Update quote
                    </Button>
                  </Flex>
                </Form>
              )}
            </Formik>
          </Loader>
        </Box>
      </Box>
    </DefaultLayout>
  );
});

export default EditQuote;

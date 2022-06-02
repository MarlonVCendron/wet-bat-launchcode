import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';
import { History as HistoryIcon } from '@mui/icons-material';

import Card from './Card';

const PendingQuotes: React.FC = () => {
  return (
    <Card title="Pending quotes" icon={HistoryIcon}>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>ID #</Th>
              <Th>NAME</Th>
              <Th>DESTINATION</Th>
              <Th>PRICE</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>123</Td>
              <Td>Katty abcd</Td>
              <Td>Vancouver</Td>
              <Td>$ 1000.00</Td>
            </Tr>
            <Tr>
              <Td>123</Td>
              <Td>Katty abcd</Td>
              <Td>Vancouver</Td>
              <Td>$ 1000.00</Td>
            </Tr>
            <Tr>
              <Td>123</Td>
              <Td>Katty abcd</Td>
              <Td>Vancouver</Td>
              <Td>$ 1000.00</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default PendingQuotes;

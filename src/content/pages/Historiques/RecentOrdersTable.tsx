import { FC, ChangeEvent, useState } from 'react';
import { format } from 'date-fns';
import numeral from 'numeral';
import PropTypes from 'prop-types';

import {
  Divider,
  Box,
  Button,
  FormControl,
  InputLabel,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  Select,
  MenuItem,
  Typography,
  CardHeader
} from '@mui/material';

import { CryptoOrder } from 'src/models/crypto_order';
import ModalDetail from './ModalDetail';
interface RecentOrdersTableProps {
  cryptoOrders: any;
  statusOptions: any;
  sctedetail: any;
}

interface Filters {
  nomclient?: string;
}

const applyFilters = (
  cryptoOrders: CryptoOrder[],
  filters: Filters
): CryptoOrder[] => {
  return cryptoOrders.filter((cryptoOrder) => {
    let matches = true;

    if (filters.nomclient && cryptoOrder.nomclient !== filters.nomclient) {
      matches = false;
    }

    return matches;
  });
};

const applyPagination = (
  cryptoOrders: CryptoOrder[],
  page: number,
  limit: number
): CryptoOrder[] => {
  return cryptoOrders.slice(page * limit, page * limit + limit);
};

const RecentOrdersTable: FC<RecentOrdersTableProps> = ({
  cryptoOrders,
  statusOptions,
  sctedetail
}) => {
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [show, setShow] = useState(false);
  const [idclient, setidclient] = useState(0);
  const [idcommande, setidcommande] = useState(0);
  const [datecommande, setdatecommande] = useState();
  const [totcommande, settotcommande] = useState();
  const [filters, setFilters] = useState<Filters>({
    nomclient: null
  });

  const handleStatusChange = (e: ChangeEvent<HTMLInputElement>): void => {
    let value = null;

    if (e.target.value !== 'all') {
      value = e.target.value;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      nomclient: value
    }));
    console.log(cryptoOrders);
  };

  const handlePageChange = (event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const filteredCryptoOrders = applyFilters(cryptoOrders, filters);

  const paginatedCryptoOrders = applyPagination(
    filteredCryptoOrders,
    page,
    limit
  );

  return (
    <>
      <Card>
        <CardHeader
          action={
            <Box width={150}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Clients</InputLabel>
                <Select
                  value={filters.nomclient || 'all'}
                  onChange={handleStatusChange}
                  label="client"
                  autoWidth
                >
                  {statusOptions.map((statusOption: any) => (
                    <MenuItem
                      key={statusOption.value}
                      value={statusOption.label}
                    >
                      {statusOption.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          }
        />

        <Divider />
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>N° de Commande</TableCell>
                <TableCell>Client</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Montant Total</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedCryptoOrders.map((cryptoOrder: any) => {
                return (
                  <TableRow hover key={cryptoOrder.id}>
                    <TableCell>
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        {cryptoOrder.order_id}
                      </Typography>
                    </TableCell>

                    <TableCell>
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        {cryptoOrder.nomclient}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        {cryptoOrder.dateorder}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        {cryptoOrder.montanttotal} €
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        onClick={() => {
                          setidclient(cryptoOrder.client_id);
                          setidcommande(cryptoOrder.order_id);
                          setdatecommande(cryptoOrder.dateorder);
                          settotcommande(cryptoOrder.montanttotal);
                          setShow(true);
                        }}
                      >
                        Détails
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <Box p={2}>
          <TablePagination
            component="div"
            count={filteredCryptoOrders.length}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleLimitChange}
            page={page}
            rowsPerPage={limit}
            rowsPerPageOptions={[5, 10, 25, 30]}
          />
        </Box>
      </Card>
      <ModalDetail
        show={show}
        setShow={setShow}
        idcommande={idcommande}
        idclient={idclient}
        sctedetail={sctedetail}
        datecommande={datecommande}
        totcommande={totcommande}
      />
    </>
  );
};

RecentOrdersTable.propTypes = {
  cryptoOrders: PropTypes.array.isRequired
};

RecentOrdersTable.defaultProps = {
  cryptoOrders: []
};

export default RecentOrdersTable;

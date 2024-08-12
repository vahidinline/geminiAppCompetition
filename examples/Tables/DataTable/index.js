import { useMemo, useEffect, useState } from 'react';
import React from 'react';
import {
  useTable,
  usePagination,
  useGlobalFilter,
  useSortBy,
} from 'react-table';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell'; // Import TableCell for styling
import Icon from '@mui/material/Icon';
import CircularProgress from '@mui/material/CircularProgress'; // Import CircularProgress for loading spinner

import MDBox from '/components/MDBox';
import MDTypography from '/components/MDTypography';
import MDButton from '/components/MDButton';
import MDPagination from '/components/MDPagination';
import DataTableHeadCell from '/examples/Tables/DataTable/DataTableHeadCell';
import DataTableBodyCell from '/examples/Tables/DataTable/DataTableBodyCell';
import { Typography } from '@mui/material';
import { useRouter } from 'next/router';

function DataTable({
  patientList,
  entriesPerPage,
  canSearch,
  showTotalEntries,
  pagination,
  isSorted,
  noEndBorder,
}) {
  const [status, setStatus] = useState('loading'); // Initialize status as 'loading'

  // Handle entries per page options
  const defaultValue = entriesPerPage.defaultValue || 10;
  const entries = entriesPerPage.entries
    ? entriesPerPage.entries.map((el) => el.toString())
    : ['5', '10', '15', '20', '25'];

  const columns = useMemo(
    () => [
      { Header: 'Patient ID', accessor: 'patientID', width: '15%' },
      { Header: 'First Name', accessor: 'firstName', width: '30%' },
      { Header: 'Last Name', accessor: 'lastName', width: '30%' },
      { Header: 'Action', accessor: 'action', width: '15%' },
    ],
    []
  );

  const data = useMemo(() => patientList, [patientList]);

  useEffect(() => {
    if (data.length === 0) {
      setStatus('loading');
    } else {
      setStatus('success');
    }
  }, [data]);

  const tableInstance = useTable(
    { columns, data, initialState: { pageIndex: 0 } },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    page,
    pageOptions,
    canPreviousPage,
    canNextPage,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    setGlobalFilter,
    state: { pageIndex, pageSize, globalFilter },
  } = tableInstance;

  useEffect(() => setPageSize(defaultValue || 10), [defaultValue, setPageSize]);

  const setEntriesPerPage = (value) => setPageSize(value);
  const router = useRouter();

  // Handle spinner display
  if (status === 'loading') {
    return (
      <MDBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh">
        <CircularProgress />
      </MDBox>
    );
  }

  return (
    <TableContainer>
      <Table {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <DataTableHeadCell
                  key={column.id}
                  {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <Typography
                    variant="body2"
                    sx={{ textTransform: 'capitalize' }}>
                    {column.render('Header')}
                    {column.isSorted ? (column.isSortedDesc ? ' ▼' : ' ▲') : ''}
                  </Typography>
                </DataTableHeadCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <DataTableBodyCell key={cell.id} {...cell.getCellProps()}>
                    <Typography
                      variant="body2"
                      sx={{ textTransform: 'capitalize' }}>
                      {cell.render('Cell')}
                    </Typography>
                  </DataTableBodyCell>
                ))}
                <TableCell>
                  <MDButton
                    onClick={() => router.push(`/patient/${row.original._id}`)}
                    variant="gradient"
                    color="light">
                    View
                  </MDButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DataTable;

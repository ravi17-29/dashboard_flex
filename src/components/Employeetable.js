// src/components/EmployeeTable.js
import React from 'react';
import { useTable, useFilters, useGlobalFilter } from 'react-table';

const EmployeeTable = ({ data }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'User Name',
        accessor: 'userName',
      },
      {
        Header: 'Risk Level',
        accessor: 'riskLevel',
      },
      {
        Header: 'Trigger Reason',
        accessor: 'triggerReason',
      },
      {
        Header: 'In Queue For',
        accessor: 'inQueueFor',
      },
      {
        Header: 'Date Added On',
        accessor: 'dateAddedOn',
      },
      {
        Header: 'Previously Reviewed',
        accessor: 'previouslyReviewed',
        Cell: ({ value }) => (value ? 'Yes' : 'No'),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter
  );

  const { globalFilter } = state;

  return (
    <div>
      <div>
        <label>
          Search:{' '}
          <input
            value={globalFilter || ''}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
        </label>
      </div>
      <table {...getTableProps()} style={{ marginTop: '20px' }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;

import React from "react";
import { useTable, Column } from "react-table";
import { AppCell, AppTable, AppTableBody, AppTableRow, TableHeaderCell, TableHeaderRow } from "./Table.style";

interface TableProps<T extends object> {
  columns: Column<T>[];
  data: T[];
}

export const Table = <T extends object>({ columns, data }: TableProps<T>) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <AppTable {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <TableHeaderRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <TableHeaderCell {...column.getHeaderProps()}>{column.render("Header")}</TableHeaderCell>
            ))}
          </TableHeaderRow>
        ))}
      </thead>
      <AppTableBody {...getTableBodyProps()}>
        {rows.map((row, rowIdx) => {
          prepareRow(row);
          return (
            <AppTableRow {...row.getRowProps()}>
              {row.cells.map((cell, cellIdx) => (
                <AppCell {...cell.getCellProps()}>{cell.render("Cell")}</AppCell>
              ))}
            </AppTableRow>
          );
        })}
      </AppTableBody>
    </AppTable>
  );
};

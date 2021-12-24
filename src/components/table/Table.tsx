import React, { FC, ReactElement } from "react";
import { TableWrapper, Row, Body, HeadRow, Cell } from "./Table.styled";

export interface TableProps {
  headerCells: ICell[];
  rows: Row[];
}

export type CellSize = "xs" | "sm" | "md" | "lg";

export interface ICell {
  // if undefined, defaults to "sm"
  size?: CellSize;
  value: string | ReactElement;
}

export interface Row {
  cells: ICell[];
}

const Table: FC<TableProps> = ({ headerCells, rows }) => {
  return (
    <TableWrapper>
      <HeadRow>
        {headerCells.map((cell, index) => {
          return (
            <Cell key={index} size={cell.size}>
              {cell.value}
            </Cell>
          );
        })}
      </HeadRow>
      <Body>
        {rows.map((row, ridx) => {
          return (
            <Row key={ridx}>
              {row.cells.map((cell, cidx) => {
                return (
                  <Cell key={cidx} size={cell.size}>
                    {cell.value}
                  </Cell>
                );
              })}
            </Row>
          );
        })}
      </Body>
    </TableWrapper>
  );
};

export default Table;

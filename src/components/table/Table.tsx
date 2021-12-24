import React, { FC } from "react";
import {
  TableWrapper,
  Row,
  Body,
  HeadRow,
  Cell,
  CellSize,
} from "./Table.styled";

export interface HeaderCell {
  size?: CellSize;
  value: string;
}

export interface TableProps {
  headerCells: HeaderCell[];
}

const Table: FC<TableProps> = ({ headerCells }) => {
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
        <Row>
          <Cell size={"xs" as CellSize}>0</Cell>
          <Cell>requester</Cell>
          <Cell>Address</Cell>
          <Cell size={"lg" as CellSize}>
            0x1234567890123456789012345678901234567890
          </Cell>
        </Row>
        <Row>
          <Cell size={"xs" as CellSize}>1</Cell>
          <Cell>identifier</Cell>
          <Cell>bytes32</Cell>
          <Cell size={"lg" as CellSize}>General KPI</Cell>
        </Row>
        <Row>
          <Cell size={"xs" as CellSize}>2</Cell>
          <Cell>timestamp</Cell>
          <Cell>uint256</Cell>
          <Cell size={"lg" as CellSize}>
            Nov 17 2021 23:00:00 (218817239812389)
          </Cell>
        </Row>
      </Body>
    </TableWrapper>
  );
};

export default Table;

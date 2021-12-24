import React from "react";
import {
  TableWrapper,
  Row,
  Body,
  HeadRow,
  Cell,
  Wrapper,
} from "./Table.styled";
const Table = () => {
  return (
    <TableWrapper>
      <Wrapper>
        <HeadRow>
          <Cell>#</Cell>
          <Cell>Name</Cell>
          <Cell>Type</Cell>
          <Cell>Data</Cell>
        </HeadRow>
      </Wrapper>
      <Body>
        <Wrapper>
          <Row>
            <Cell>0</Cell>
            <Cell>requester</Cell>
            <Cell>Address</Cell>
            {/* <Cell>0x1234567890123456789012345678901234567890</Cell> */}
            <Cell>0x1234567890</Cell>
          </Row>
          <Row>
            <Cell>1</Cell>
            <Cell>identifier</Cell>
            <Cell>bytes32</Cell>
            <Cell>General KPI</Cell>
          </Row>
        </Wrapper>
      </Body>
    </TableWrapper>
  );
};

export default Table;

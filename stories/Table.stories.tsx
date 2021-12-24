import React from "react";
import { Story, Meta } from "@storybook/react";
import { Table, TableProps, ICell, Row, CellSize } from "../src";

const meta: Meta = {
  title: "Components/Table",
  component: Table,
  // argTypes: {
  //   labelPlacement: {
  //     control: {
  //       type: "radio",
  //       options: ["default", "overlap"],
  //     },
  //   },
  // },
};

export default meta;

const headerCells: ICell[] = [
  {
    size: "xs" as CellSize,
    value: "#",
  },
  {
    size: "sm" as CellSize,
    value: "Name",
  },
  {
    size: "sm" as CellSize,
    value: "Type",
  },
  {
    size: "lg" as CellSize,
    value: "Data",
  },
];

const rows: Row[] = [
  {
    cells: [
      {
        size: "xs" as CellSize,
        value: "0",
      },
      {
        size: "sm" as CellSize,
        value: "requester",
      },
      {
        size: "sm" as CellSize,
        value: "Address",
      },
      {
        size: "lg" as CellSize,
        value: (
          <a
            target="_blank"
            rel="noreferrer"
            href="https://etherscan.io/address/0x0000000000000000000000000000000000000000"
          >
            0x0000000000000000000000000000000000000000
          </a>
        ),
      },
    ],
  },
  {
    cells: [
      {
        size: "xs" as CellSize,
        value: "1",
      },
      {
        size: "sm" as CellSize,
        value: "identifier",
      },
      {
        size: "sm" as CellSize,
        value: "bytes32",
      },
      {
        size: "lg" as CellSize,
        value: "General KPI",
      },
    ],
  },
  {
    cells: [
      {
        size: "xs" as CellSize,
        value: "2",
      },
      {
        size: "sm" as CellSize,
        value: "timestamp",
      },
      {
        size: "sm" as CellSize,
        value: "uint256",
      },
      {
        size: "lg" as CellSize,
        value: "Nov 17 2021 23:00:00 (218817239812389)",
      },
    ],
  },
];

//👇 We create a “template” of how args map to rendering
const Template: Story<TableProps> = (args) => {
  return <Table {...args} />;
};

export const Basic = Template.bind({});

Basic.args = {
  rows,
  headerCells,
};

import React from "react";
import { Story, Meta } from "@storybook/react";
import { Table, TableProps, ICell, Row } from "../src";

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
    size: "xs",
    value: "#",
  },
  {
    size: "sm",
    value: "Name",
  },
  {
    size: "sm",
    value: "Type",
  },
  {
    size: "lg",
    value: "Data",
  },
];

const rows: Row[] = [
  {
    cells: [
      {
        size: "xs",
        value: "0",
      },
      {
        size: "sm",
        value: "requester",
      },
      {
        size: "sm",
        value: "Address",
      },
      {
        size: "lg",
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
        size: "xs",
        value: "1",
      },
      {
        size: "sm",
        value: "identifier",
      },
      {
        size: "sm",
        value: "bytes32",
      },
      {
        size: "lg",
        value: "General KPI",
      },
    ],
  },
  {
    cells: [
      {
        size: "xs",
        value: "2",
      },
      {
        size: "sm",
        value: "timestamp",
      },
      {
        size: "sm",
        value: "uint256",
      },
      {
        size: "lg",
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

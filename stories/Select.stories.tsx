import React from "react";
import { Story, Meta } from "@storybook/react";
import { Select, SelectProps } from "../src";

const meta: Meta = {
  title: "Components/Select",
  component: Select,
};

export default meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<SelectProps> = args => <Select {...args} />;

export const Default = Template.bind({});

Default.args = {
  items: [
    {
      label: "Orange", 
      value:"orange",
    },
  {
    label: "Apple",
    value: "apple"
  }]
};

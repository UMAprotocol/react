import React, { useState } from "react";
import { Story, Meta } from "@storybook/react";
import { Input, InputProps } from "../src";

const meta: Meta = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    labelPlacement: {
      control: {
        type: "radio",
        options: ["default", "overlap"],
      },
    },
  },
};

export default meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<InputProps> = args => {
  const [value, setValue] = useState("");
  return <Input {...args} value={value} setValue={setValue} />;
};

export const Basic = Template.bind({});

Basic.args = {
  width: "400px",
  placeholder: "Type here...",
};

export const WithLabel = Template.bind({});

WithLabel.args = {
  width: "400px",
  placeholder: "Type here...",
  label: "Label for input",
};

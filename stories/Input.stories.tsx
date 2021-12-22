import React, { useState } from "react";
import { Story, Meta } from "@storybook/react";
import { Input, InputProps } from "../src";

const meta: Meta = {
  title: "Components/Input",
  component: Input,
  // argTypes: {
  //   variant: {
  //     control: {
  //       type: "radio",
  //       options: ["primary", "outline"],
  //     },
  //   },
  // },
};

export default meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<InputProps> = args => {
  const [value, setValue] = useState("");
  return (
    <Input
      width="400px"
      placeholder="Type here..."
      {...args}
      value={value}
      setValue={setValue}
    />
  );
};

export const Basic = Template.bind({});

Basic.args = {
  // value: "primary",
  // children: "Hello UMA",
};

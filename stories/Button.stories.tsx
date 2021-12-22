import React from "react";
import { Story, Meta } from "@storybook/react";
import { Button, ButtonProps } from "../src";

const meta: Meta = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "radio",
        options: ["primary", "outline"],
      },
    },
  },
};

export default meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  variant: "primary",
  children: "Hello UMA",
};

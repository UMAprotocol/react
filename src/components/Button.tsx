import React, {
  forwardRef,
  ForwardRefRenderFunction,
  HTMLAttributes,
} from "react";
import styled from "@emotion/styled";
import { COLORS } from "../constants";

type Variant = "primary" | "outline";
export type Props = {
  variant?: Variant;
} & HTMLAttributes<HTMLButtonElement>;

interface ButtonStyles extends React.CSSProperties {
  "--textColor": string;
  "--bgColor": string;
  "--borderColor": string;
  "--hoverBackgroundColor": string;
  "--hoverTextColor"?: string;
}

const STYLES: {
  [key in Variant]: ButtonStyles;
} = {
  primary: {
    "--textColor": COLORS.white,
    "--bgColor": COLORS.primary,
    "--borderColor": "transparent",
    "--hoverBackgroundColor": COLORS.primaryDark,
    "--hoverTextColor": COLORS.white,
  },
  outline: {
    "--textColor": COLORS.primary,
    "--bgColor": COLORS.white,
    "--borderColor": "currentColor",
    "--hoverBackgroundColor": COLORS.primary,
    "--hoverTextColor": COLORS.white,
  },
};

const ButtonComponent: ForwardRefRenderFunction<HTMLButtonElement, Props> = (
  { children, variant = "primary", ...delegated },
  externalRef
) => {
  if (!["primary", "outline"].includes(variant)) {
    throw new Error(
      `Button should be passed a valid variant prop, you passed ${variant}. If you don't pass a variant prop, Button will default to primary.`
    );
  }
  const styles = STYLES[variant];
  return (
    <BaseButton style={styles} ref={externalRef} {...delegated}>
      {children}
    </BaseButton>
  );
};
const Button = forwardRef(ButtonComponent);
Button.displayName = "Button";
export default Button;

const BaseButton = styled.button`
  padding: 15px;
  border-radius: 4px;
  border: 1px solid var(--borderColor);
  color: var(--textColor);
  background-color: var(--bgColor);
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:hover {
    color: var(--hoverTextColor);
    background-color: var(--hoverBackgroundColor);
  }
`;

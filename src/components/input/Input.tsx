import React, { FC } from "react";
import { StyledInput, Label } from "./Input.styled";

export interface Props {
  value: string;
  // Note: updating the value needs to happen in this onChange function.
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  labelPlacement?: LabelPlacement;
  width?: string;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement> | undefined;
  id?: string;
}

export type LabelPlacement = "default | overlap";

const TextInput: FC<Props> = ({
  value,
  onChange,
  label,
  labelPlacement = "default" as LabelPlacement,
  width,
  onKeyDown,
  id,
  placeholder,
}) => {
  return (
    <StyledInput inputWidth={width}>
      <Label labelPlacement={labelPlacement}>{label}</Label>
      <div>
        <input
          id={id}
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
      </div>
    </StyledInput>
  );
};

export default TextInput;

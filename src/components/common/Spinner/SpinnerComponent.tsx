// SpinnerComponent.tsx
"use client";

import { FC } from "react";
import {
  SpinnerContainedContainer,
  SpinnerContainer,
  SpinnerStyled,
} from "./Spinner.styled";

type SpinnerProps = {
  show: boolean;
  contained?: boolean;
};

const SpinnerComponent: FC<SpinnerProps> = ({ show, contained }) => {
  if (!show) {
    return null;
  } else if (contained) {
    return (
      <SpinnerContainedContainer>
        <SpinnerStyled />
      </SpinnerContainedContainer>
    );
  }

  return (
    <SpinnerContainer>
      <SpinnerStyled />
    </SpinnerContainer>
  );
};

export default SpinnerComponent;

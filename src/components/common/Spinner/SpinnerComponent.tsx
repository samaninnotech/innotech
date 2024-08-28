"use client";

import { FC } from "react";
import {
  SpinnerContainedContainer,
  SpinnerContainer,
  SpinnerStyled,
} from "./Spinner.styled";

type SpinnerProps = { show: boolean; contained?: boolean };
const SpinnerComponent: FC<SpinnerProps> = ({ show, contained }) => {
  if (!show) {
    return <></>;
  } else if (contained) {
    return (
      <SpinnerContainedContainer>
        <SpinnerStyled></SpinnerStyled>
      </SpinnerContainedContainer>
    );
  }

  return (
    <SpinnerContainer>
      <SpinnerStyled></SpinnerStyled>
    </SpinnerContainer>
  );
};

export default SpinnerComponent;

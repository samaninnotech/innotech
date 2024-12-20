"use client";

import { FC } from "react";
import {
  SpinnerContainedContainer,
  SpinnerContainer,
  Square,
  SquaresContainer,
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
        <SquaresContainer>
          {[...Array(5)].map((_, index) => (
            <Square key={index} delay={index * 0.1} />
          ))}
        </SquaresContainer>
      </SpinnerContainedContainer>
    );
  }

  return (
    <SpinnerContainer>
      <SquaresContainer>
        {[...Array(5)].map((_, index) => (
          <Square key={index} delay={index * 0.1} />
        ))}
      </SquaresContainer>
    </SpinnerContainer>
  );
};

export default SpinnerComponent;

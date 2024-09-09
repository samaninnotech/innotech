"use client";
import React from "react";
import {
  ColumnContainer,
  Heading,
  RowContainer,
  Separator,
  Spacer,
} from "./HomePageTopPost.styled";

interface HomePageTopPostProps {
  backgroundImage: string;
}

export const HomePageTopPost: React.FC<HomePageTopPostProps> = ({
  backgroundImage,
}) => {
  return (
    <RowContainer backgroundImage={backgroundImage}>
      <ColumnContainer>
        <div>
          <Spacer />
          <Heading align="center">
            <h6>Soluzioni Software per</h6>
          </Heading>
          <Spacer />
          <Heading align="center">
            <h3>
              Progetti di Innovazione
              <br />
              Tecnologica
            </h3>
          </Heading>
          <Spacer />
          <Heading align="center">
            <div>
              Forniamo Competenze e Tecnologia funzionali alla crescita delle
              PMI
            </div>
          </Heading>
          <Spacer />
          <Spacer />
        </div>
      </ColumnContainer>
      <Separator>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <path d="M 0 0 L0 100 L100 100 L100 0 Q 50 200 0 0"></path>
        </svg>
      </Separator>
    </RowContainer>
  );
};

export default HomePageTopPost;

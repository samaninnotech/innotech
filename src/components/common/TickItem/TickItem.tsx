import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Description,
  Marker,
  TickItemContainer,
  Title,
  TitleWrap,
} from "./TickItem.styled";

interface TickItemProps {
  title: string;
  description: string;
}

const TickItem: React.FC<TickItemProps> = ({ title, description }) => (
  <TickItemContainer>
    <Marker>
      <FontAwesomeIcon icon={faCheck} size="1x" />
    </Marker>
    <TitleWrap>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </TitleWrap>
  </TickItemContainer>
);

export default TickItem;

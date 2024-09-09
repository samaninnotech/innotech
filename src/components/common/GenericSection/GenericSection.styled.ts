import styled from "styled-components";

type GenericSectionProps = { $background?: string };
export const GenericSection = styled.section<GenericSectionProps>`
  background: ${({ $background }) => $background || ""};
  background-size: cover;
  background-position: center;
`;

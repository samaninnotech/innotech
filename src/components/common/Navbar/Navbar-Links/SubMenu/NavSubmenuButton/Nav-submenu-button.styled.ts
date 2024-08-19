import Link from "@/i18n/Link";
import styled from "styled-components";

type NavSubmenuButtonProps = {
  $margin?: string;
  $color?: string;
  $bgColor?: string;
};

export const Element = styled(Link)<NavSubmenuButtonProps>`
  background:  ${(props) => props.$bgColor || " "};
  color: ${(props) => props.$color || " "};
  font-size: 1em;
  font-weight: bold;
  margin: ${(props) => props.$margin || "1em"};
  padding: 0.5rem 1rem;
  border-bottom-color: var(--light-gray-1);
  border-bottom-radius 0.25rem;
  width: fit-content;
  &:hover {
      background-color: rgb(0,157,178);
      text-decoration: none;
    }
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

import styled from "styled-components";

interface TabButtonProps {
  isActive: boolean;
}

export const TabButton = styled.button<TabButtonProps>`
  background-color: transparent;
  border: 1px solid ${({ isActive }) => (isActive ? "#25567a" : "#cec8c8")};
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? "#25567a" : "#868788")};
  border-radius: 5px;
  outline: none;
  font-size: 14px;
  padding: 10px 15px;
  flex-grow: 1;
  text-align: center;

  &:hover {
    border: 1px solid #25567a;
  }
`;

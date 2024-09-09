import styled from "styled-components";

interface TabButtonProps {
  isActive: boolean;
}

export const TabButton = styled.button<TabButtonProps>`
  background-color: transparent;
  border: 1px solid ${({ isActive }) => (isActive ? "#25567a" : "#cec8c8")};
  padding: 15px 25px;
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? "#25567a" : "#868788")};
  margin-right: 10px;
  border-radius: 3px;
  outline: none;
  font-size: 14px;
  width: 210px;
  height: 60px;
  &:hover {
    border: 1px solid #25567a;
  }
`;

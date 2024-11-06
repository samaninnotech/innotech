import styled from "styled-components";

export const TickItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  align-items: flex-start;
`;

export const Marker = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 15px;
  color: var(--innotech-color);
  font-size: 24px;
  font-weight: 500;
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h6<{ fontWeight: string }>`
  font-size: 24px;
  font-weight: ${(props) => props.fontWeight};
  margin-left: 15px;
  color: var(--innotech-color);
`;

export const Description = styled.div`
  font-size: 16px;
  color: #555;
  margin-top: 15px;
`;

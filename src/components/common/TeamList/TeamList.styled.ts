import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  overflow: visible;
  transition: opacity 0.5s ease;
  display: flex;
  justify-content: center;
`;

export const InnerContainer1 = styled.div`
  @media (min-width: 1200px) {
    max-width: 1200px;
  }

  @media (max-width: 1199px) and (min-width: 991px) {
    width: 940px;
  }

  @media (max-width: 990px) and (min-width: 769px) {
    width: 720px;
  }

  @media (max-width: 768px) {
    width: 100%; /* Shrink to the size of the window */
  }
  padding: 0;
`;

export const InnerContainer2 = styled.div`
  padding: 0 15px;
  width: 100%;
`;

export const InnerContainer3 = styled.div`
  // Any additional styling needed here
`;

export const Header = styled.h3`
  font-size: 2.5rem;
  color: #000;
  margin-bottom: 3rem;
  line-height: 1.5;
  width: 60%;
  text-align: center;
  width: 100%;
`;

export const Paragraph = styled.div`
  flex: 0 0 55%; /* Takes 55% of the width */
  text-align: left;
  margin-bottom: 20px;
  color: #696969;
`;

export const RightBox = styled.div`
  flex: 0 0 25%; /* Takes 25% of the width */
`;

export const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;

  @media (max-width: 1200px) {
    justify-content: space-around;
  }

  @media (max-width: 990px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 5px; /* Adjust the gap as needed */
  grid-row-gap: 5px; /* Adjust the gap as needed */
  max-width: 1200px;
  width: 100%;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 990px) {
    grid-template-columns: repeat(2, 1fr); /* Adjust for smaller screens */
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Adjust for very small screens */
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr; /* 1 list item per row for the smallest screens */
  }
`;

export const Spacer = styled.div`
  height: 124px; /* Adjust spacer height as needed */
`;

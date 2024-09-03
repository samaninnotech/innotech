import styled from 'styled-components';

type GridProps = {
  numberOfColumns: number;
}
export const InfoSectionContainer = styled.section`
  padding: 20px;
  background-color: #fff; /* Optional: Light background for the entire section */
  margin: 0 5rem;
`;

export const HeadingContainer = styled.header`
  text-align: center;
  margin-bottom: 20px;
`;

export const SectionHeading = styled.h3`
  font-size: 24px;
  font-weight: bold;
`;

export const GridWrapper = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.numberOfColumns || "3"}, 1fr); /* 3 columns */
  gap: 40px;
`;
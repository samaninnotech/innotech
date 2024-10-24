// YoutubeSection.styled.ts
import Image from "next/image";
import styled from "styled-components";

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center align items horizontally */
  padding: 2rem; /* Add some padding */
  background-color: #f9f9f9; /* Background color for the section */
`;

export const SmallHeader = styled.h3`
  font-size: 18px;
  color: var(--text-gray-color); /* Customize the color */
  margin-bottom: 0 !important; /* Spacing below the small header */
`;

export const LargeHeader = styled.div`
  font-size: 28px;
  text-align: center; /* Center the text */
  margin-top: 0rem; /* Spacing below the large header */
`;

export const Logo = styled(Image)`
  max-width: 100%; /* Ensure the logo is responsive */
  height: auto; /* Maintain aspect ratio */
`;

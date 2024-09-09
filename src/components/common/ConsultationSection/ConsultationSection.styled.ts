import styled from "styled-components";

// Container for the entire section
export const Section = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  background-color: #f8f8f8;
  top: -120px;
  display: flex;
  justify-content: center;
  padding-bottom: 40px;
`;

// Wrapper for the row
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Center the row items */
  width: 100%;
`;

// Wrapper for columns in the row
export const Column = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 0 10px; /* Add padding to create space around each column */
  width: 100%; /* Full width by default */
  max-width: 100%; /* Default to full width */

  @media (min-width: 768px) {
    max-width: 720px; /* Maximum width from 768px and up */
  }

  @media (min-width: 990px) {
    max-width: 940px; /* Maximum width from 990px and up */
  }

  @media (min-width: 1200px) {
    max-width: 1170px; /* Maximum width from 1200px and up */
  }
`;

// Swiper container
export const SwiperContainer = styled.div`
  width: 100%;

  .swiper-pagination {
    display: block; /* Ensure pagination dots are visible */
    position: absolute;
    bottom: -10px; /* Adjust based on your design */
    left: 0;
    width: 100%;
    text-align: center;
  }

  @media (min-width: 991px) {
    .swiper-pagination {
      display: none; /* Hide pagination from 991px and up */
    }
  }
`;

// Spacer element
export const Spacer = styled.div`
  height: 60px; /* Increased height to ensure pagination is visible */
`;

// Pagination container for positioning pagination dots
export const PaginationContainer = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
  bottom: -30px; /* Adjust this value to position the pagination dots */
`;

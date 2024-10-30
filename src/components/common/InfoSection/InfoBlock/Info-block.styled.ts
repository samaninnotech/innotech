import { mediaRules } from "@/themes/media-breakpoints";
import styled from "styled-components";

export const InfoBlockContainer = styled.article`
  padding: 15px; /* Optional: Add padding for better spacing */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #fff; /* Ensure the background is white */
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease; /* Smooth transform and shadow transition */
  :hover {
    transform: translateY(-10px);
  }
  width: 90%;
  ${mediaRules.xsm} {
    width: 80%;
  }
  ${mediaRules.sm} {
    width: 95%;
  }
  ${mediaRules.md} {
    width: 95%;
  }
  ${mediaRules.lg} {
    width: 95%;
  }
`;

export const ContentWrap = styled.section`
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  text-align: left;
`;

export const ImageContainer = styled.figure`
  margin-bottom: 10px;
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;
`;

export const Heading = styled.h4`
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
  text-align: left;
`;

export const Text = styled.div`
  font-size: 14px;
  text-align: left;
  color: #555;
  /* Style list items */
  ul {
    list-style-type: none; /* Removes default bullets */
    padding: 0; /* Removes default padding */
    margin: 0; /* Removes default margin */
  }

  li {
    padding-left: 0; /* Removes default padding */
    margin-bottom: 8px; /* Optional: Add spacing between list items */
  }
`;

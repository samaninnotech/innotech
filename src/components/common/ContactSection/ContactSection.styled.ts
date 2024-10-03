import { mediaRules } from "@/themes/media-breakpoints";
import styled from "styled-components";

type SectionWrapperProps = {
  backgroundImage?: string;
};
// Define custom props for Column and Heading
type ColumnProps = {
  marginLeft?: string;
};

type FormItemProps = {
  padding?: string;
};

export const SectionWrapper = styled.div<SectionWrapperProps>`
  background-color: #fff;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding-top: 110px; /* Align with the background image's top padding */
  padding-bottom: 120px; /* Align with the background image's bottom padding */
  background-image: url(${(props) =>
    props.backgroundImage || "default-image-url"});
  background-repeat: no-repeat;
  background-position: center right;
  background-size: auto; /* Ensures that the background is displayed in its original size */
  @media (max-width: 768px) {
    background-position: bottom center;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 20px;
  ${mediaRules.sm} {
    display: block;
    max-width: 720px;
  }
  ${mediaRules.md} {
    display: block;
    max-width: 940px;
  }
  ${mediaRules.lg} {
    display: block;
    max-width: 1200px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between; /* Add space between columns */
  @media (max-width: 768px) {
    flex-direction: column; /* Stack columns on small screens */
  }
`;

export const LeftColumn = styled.div<ColumnProps>`
  width: 100%;
  padding-right: 15px;
  display: flex;
  flex-direction: column; /* Stack content vertically */
  align-items: stretch; /* Ensure content takes the full height */
  justify-content: center;
  height: 100%; /* Ensure the column takes the full height */
  margin-left: 20px;
  border-left: 5px solid #25567a;
  padding-left: 2rem;
  line-height: 3; /* Adjust this value to increase space between lines */

  ${mediaRules.sm} {
    width: 100%;
  }

  ${mediaRules.md} {
    max-width: 45%;
  }

  ${mediaRules.lg} {
    margin-left: 50px;
    max-width: 45%;
  }
`;

export const Column = styled.div<ColumnProps>`
  width: 100%;
  padding-right: 15px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-left: 20px;

  ${mediaRules.sm} {
    width: 100%;
  }
  ${mediaRules.md} {
    max-width: 45%;
  }
  ${mediaRules.lg} {
    margin-left: 50px;
    max-width: 45%;
  }
`;

export const FirstRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
// Styled component with custom props
export const Header = styled.h1`
  color: #333;
  margin: 1rem 0;
`;

export const Subtitle = styled.h4`
  display: block;
  margin: 1rem 0;
`;

export const Spacer = styled.div`
  height: 20px;
`;

export const FormWrapper = styled.div`
  position: relative;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

export const FormItem = styled.div<FormItemProps>`
  margin-bottom: 20px;
  width: 100%;
  padding-right: ${(props) => props.padding || "0"};
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px;
  border-radius: 4px;
  font-size: 16px;
  background-color: #f5f5f5;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  border-radius: 4px;
  font-size: 16px;
  background-color: #f5f5f5;
`;

export const Select = styled.select`
  width: 100%;
  padding: 15px;
  border-radius: 4px;
  font-size: 16px;
  background-color: #f5f5f5;
`;

export const ButtonContainer = styled.div`
  width: 100%;
`;
export const SubmitButton = styled.button<{ isEnabled: boolean }>`
  padding: 15px 30px;
  background-color: ${(props) => (props.isEnabled ? "#007cba" : "#ccc")};
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: ${(props) => (props.isEnabled ? "pointer" : "not-allowed")};
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const Agreement = styled.div`
  margin-bottom: 20px;
  label {
    font-size: 14px;
    display: flex; /* Add this to align the checkbox and text horizontally */
    align-items: center; /* Vertically align the checkbox and text */
    input {
      margin-right: 8px; /* Adjust this value to add space between the checkbox and the text */
    }
    a {
      color: #007cba;
      text-decoration: none;
    }
  }
`;

export const Loader = styled.div`
  display: none;
  margin-top: 20px;
  .sk-wave {
    display: flex;
    justify-content: space-between;
  }
  .sk-rect {
    width: 6px;
    height: 24px;
    background-color: #333;
    animation: sk-wave 1.2s infinite ease-in-out;
  }
  .sk-rect1 {
    animation-delay: -1.2s;
  }
  .sk-rect2 {
    animation-delay: -1.1s;
  }
  .sk-rect3 {
    animation-delay: -1s;
  }
  .sk-rect4 {
    animation-delay: -0.9s;
  }
  .sk-rect5 {
    animation-delay: -0.8s;
  }

  @keyframes sk-wave {
    0%,
    40%,
    100% {
      transform: scaleY(1);
    }
    20% {
      transform: scaleY(2);
    }
  }
`;

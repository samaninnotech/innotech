import { mediaRules } from "@/themes/media-breakpoints";
import Image from "next/image";
import styled from "styled-components";

export const ContactFormContainer = styled.div`
  background-color: #fff;
  position: relative;
  width: 100%;
  padding-top: 110px; /* Align with the background image's top padding */
  padding-bottom: 120px; /* Align with the background image's bottom padding */
  border: none;
`;

export const ContactFormContent = styled.div`
  color: black;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  ${mediaRules.xsm} {
    max-width: 576px;
  }

  ${mediaRules.sm} {
    max-width: 720px;
  }

  ${mediaRules.md} {
    max-width: 940px;
  }

  ${mediaRules.lg} {
    max-width: 1170px;
  }
`;

export const FormWrapper = styled.div`
  animation: move-up 0.3s;
  width: 100%;
  max-width: 400px;

  ${mediaRules.xsm} {
    max-width: 576px;
  }

  ${mediaRules.sm} {
    max-width: 720px;
  }

  ${mediaRules.md} {
    max-width: 940px;
  }

  ${mediaRules.lg} {
    max-width: 1170px;
  }
`;

export const FormField = styled.p`
  margin-bottom: 1rem;
  text-align: left;
  align-self: left;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  border-radius: 4px;
  font-size: 16px;
  background-color: #f5f5f5;
  border: 1px solid transparent; /* Add a default border */
  color: var(
    --text-gray-color
  ); /* Set default text color to gray when not focused */

  &:focus {
    border: 0.2px solid #177aa9; /* Change to a thinner border */
    outline: none; /* Remove the default outline */
    color: #1b7caa; /* Change text color back to original when focused */
  }
`;

export const InputLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-black-color);
  text-align: left;
  font-size: 14px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border-radius: 4px;
  background-color: #f5f5f5;
  border: 1px solid transparent; /* Add a default border */
  color: var(
    --text-gray-color
  ); /* Set default text color to gray when not focused */
  padding: 15px;
  &:focus {
    border-color: #177aa9; /* Change border color to blue when focused */
    outline: none; /* Remove the default outline */
    color: #1b7caa; /* Change text color back to original when focused */
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: left;
  color: black;
  text-align: left;

  input {
    /* Hide the default checkbox */
    appearance: none;
    -webkit-appearance: none; /* For Safari */
    width: 20px; /* Adjust width of the checkbox */
    height: 20px; /* Adjust height of the checkbox */
    border: 1px solid black; /* Border for the checkbox */
    margin-right: 10px; /* Space between checkbox and text */
    cursor: pointer; /* Change cursor to pointer for better UX */
    outline: none; /* Remove default focus outline */

    &:checked {
      background-color: transparent; /* Keep background transparent for the checked state */
    }

    &:checked::before {
      content: ""; /* Create a custom square */
      display: block;
      width: 10px; /* Adjust width of the inner square */
      height: 10px; /* Adjust height of the inner square */
      background-color: var(
        --text-black-color
      ); /* Color of the square when checked */
      margin: 4px; /* Add space between the inner square and border */
    }
  }
`;

export const SubmitButton = styled.input`
  padding: 0.5rem 1rem;
  background-color: var(--innotech-color);
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;

  &:disabled {
    background-color: var(--innotech-color);
    opacity: 0.5;
  }
`;

export const ImageColumn = styled.div`
  flex: 1;
  animation: move-up 0.3s;
`;

export const ImageWrap = styled.div`
  text-align: center;
`;

export const Thumbnail = styled(Image)`
  width: 80%;
  height: 100%;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: var(--innotech-color);
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 0.8rem;
  cursor: pointer;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: top 0.2s ease;

  &:hover {
    top: 9px;
  }
`;

export const Notification = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #25567a, #5897c5);
  color: white;
  padding: 15px 25px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
  opacity: 1;
  transform: translateX(-50%) translateY(0);
  text-align: left;

  &.fade-out {
    opacity: 0;
    transform: translateX(-50%) translateY(-20px);
  }

  @media (max-width: 600px) {
    width: 90%;
    padding: 12px 15px;
  }
`;

import { mediaRules } from "@/themes/media-breakpoints";
import Image from "next/image";
import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  overflow: hidden;
`;

export const PopupContainer = styled.div`
  width: 80%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
  display: flex;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  z-index: 10000;
  max-height: calc(100% - 5rem);
  overflow-y: auto;
  margin: 5rem 0;
  &::-webkit-scrollbar {
    width: 3px; /* Adjust width for vertical scrollbar */
  }
  // Media rules for max-width when thumbnail exists
  ${mediaRules.sm} {
    max-width: 576px;
  }
  ${mediaRules.md} {
    max-width: 620px;
  }
  ${mediaRules.lg} {
    max-width: 840px;
  }
`;

export const PopupContent = styled.div`
  color: black;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
  width: 100%;
  padding: 0 10px;
`;

export const TextColumn = styled.div`
  animation: move-up 0.3s;
  text-align: left;
  margin-bottom: 1rem;
`;

export const Header = styled.h2`
  color: var(--innotech-color);
  font-weight: 300;
  margin: 0;
`;

export const Subtitle = styled.div`
  color: var(--text-gray-color);
  font-weight: 300;
  margin-top: 10px;
`;
export const FormWrapper = styled.div`
  animation: move-up 0.3s;
  width: 100%;
`;

export const FormField = styled.p`
  margin-top: 0;
  margin-bottom: 1rem;
  text-align: left;
  font-size: 14px;
`;

export const InputLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: black;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 4px;
  background-color: #f5f5f5;
  border: 1px solid transparent;
  color: var(--text-gray-color);
  &:focus {
    border-color: #177aa9;
    outline: none;
    color: #1b7caa;
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  color: black;
  text-align: center;
  margin-bottom: 20px;
  input {
    appearance: none;
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border: 1px solid black;
    margin-right: 10px;
    cursor: pointer;
    outline: none;

    &:checked {
      background-color: transparent;
    }

    &:checked::before {
      content: "";
      display: block;
      width: 10px;
      height: 10px;
      background-color: var(--text-black-color);
      margin: 4px;
    }
  }
`;

export const SubmitButton = styled.input`
  padding: 1rem 2.5rem;
  background-color: var(--innotech-color);
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  margin-bottom: 10rem;

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
  position: relative;
  top: -120px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 16px;
  background-color: #ffb900;
  color: white;
  padding: 15px 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
  opacity: 1;
  transform: translateX(-50%) translateY(0);
  text-align: left;
  border: 1px solid #beb71b;
  &.fade-out {
    opacity: 0;
    transform: translateX(-50%) translateY(-20px);
  }

  @media (max-width: 600px) {
    width: 90%;
    padding: 12px 15px;
  }
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

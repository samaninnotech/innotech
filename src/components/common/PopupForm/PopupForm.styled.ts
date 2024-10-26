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

export const PopupContainer = styled.div<{ hasThumbnail: boolean }>`
  width: ${({ hasThumbnail }) => (hasThumbnail ? "100%" : "60%")};
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

  // Custom scrollbar
  &::-webkit-scrollbar {
    width: 3px; /* Adjust width for vertical scrollbar */
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3); /* Scroll thumb color */
    border-radius: 10px; /* Rounded edges for scrollbar */
  }

  &::-webkit-scrollbar-track {
    background-color: transparent; /* Background of the scrollbar track */
  }

  // Media rules for max-width when thumbnail exists
  ${mediaRules.sm} {
    max-width: ${({ hasThumbnail }) => (hasThumbnail ? "576px" : "80%")};
  }
  ${mediaRules.md} {
    max-width: ${({ hasThumbnail }) => (hasThumbnail ? "720px" : "80%")};
  }
  ${mediaRules.lg} {
    max-width: ${({ hasThumbnail }) => (hasThumbnail ? "940px" : "80%")};
  }
`;

export const PopupContent = styled.div<{ fullWidth: boolean }>`
  color: black;
  display: flex;
  justify-content: center;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
`;

export const Row = styled.div<{ fullWidth: boolean }>`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
  padding: 0 30px;
  width: ${({ fullWidth }) => (fullWidth ? "80%" : "auto")};
`;

export const Column = styled.div`
  flex: 1;
  padding: 4rem 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin-top: 1rem;
`;

export const TextColumn = styled.div`
  animation: move-up 0.3s;
  text-align: center;
  margin-bottom: 1rem;
`;

export const FormWrapper = styled.div`
  animation: move-up 0.3s;
  width: 100%;
  form {
    display: flex;
    flex-direction: column;
  }
`;

export const FormField = styled.p`
  margin-bottom: 1rem;
  text-align: center;
`;

export const InputLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: black;
`;

export const Input = styled.input`
  width: 80%;
  padding: 0.5rem;
  border-radius: 4px;
  background-color: #f5f5f5;
  border: 1px solid transparent;
  color: var(--text-gray-color);
  padding: 15px;
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

  input {
    appearance: none;
    -webkit-appearance: none;
    width: 30px;
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
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  margin-bottom: 5rem;
  width: fit-content;
  align-self: center;
  &:disabled {
    background-color: #ccc;
  }
`;

export const ImageColumn = styled.div`
  flex: 0.8;
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
  top: -50px;
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

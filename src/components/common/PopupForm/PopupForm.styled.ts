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
  width: 95%;
  max-width: 600px;
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
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  // Media rules for max-width when thumbnail exists
  ${mediaRules.sm} {
    max-width: 676px;
  }
  ${mediaRules.md} {
    max-width: 720px;
  }
  ${mediaRules.lg} {
    max-width: 840px;
  }
`;

export const PopupContent = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 0 -15px;
  width: inherit;
  ${mediaRules.sm} {
    flex-direction: row;
  }
`;

export const Column = styled.div`
  flex: 1;
  padding: 1rem 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin: 0 1rem;
  margin-top: 1rem;
  margin-bottom: 5rem;
  width: inherit;
`;

export const Header = styled.div`
  text-align: left;
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
  color: var(--text-gray-color);
  font-size: 14px;
`;

export const Input = styled.input`
  width: 90%;
  padding: 1rem;
  border-radius: 4px;
  background-color: var(--light-gray);
  border: 1px solid transparent;
  color: var(--text-gray-color);
  font-size: 16px;

  &:focus {
    outline: none;
    color: var(--text-gray-color);
    background-color: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  color: black;
  text-align: left;
  font-size: 14px;
  input {
    appearance: none;
    -webkit-appearance: none;
    width: 25px;
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
  background-color: var(--innotech-color);
  color: white;
  border: none;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
  margin-bottom: 10rem;
  ${mediaRules.sm} {
    font-size: 18px;
  }
  &:disabled {
    background-color: var(--innotech-color);
    opacity: 0.5;
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
  top: -120px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
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

  ${mediaRules.md} {
    width: 90%;
    padding: 12px 15px;
  }
`;

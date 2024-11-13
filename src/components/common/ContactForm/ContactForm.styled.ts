import { mediaRules } from "@/themes/media-breakpoints";
import styled from "styled-components";

export const ContactFormContainer = styled.div`
  background-color: var(--white-color);
  position: relative;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
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
  background-color: var(--light-gray);
  border: 1px solid transparent;
  color: var(--text-gray-color);

  &:focus {
    border: 0.2px solid var(--input-border-color);
    outline: none;
    color: #1b7caa;
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
  background-color: var(--light-gray);
  border: 1px solid transparent;
  color: var(--text-gray-color);
  padding: 15px;
  &:focus {
    border-color: var(--input-border-color);
    outline: none;
    color: #1b7caa;
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: left;
  color: black;
  text-align: left;

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

import { mediaRules } from "@/themes/media-breakpoints";
import styled from "styled-components";

type SectionWrapperProps = {
  backgroundImage?: string;
};

type ColumnProps = {
  marginLeft?: string;
};

type FormItemProps = {
  padding?: string;
};

export const SectionWrapper = styled.div<SectionWrapperProps>`
  background-color: var(--white-color);
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding: 0 1rem;
  padding-top: 110px;
  padding-bottom: 120px;
  background-image: url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-position: center right;
  background-size: auto;
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  ${mediaRules.xsm} {
    max-width: 520px;
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

export const Row = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  ${mediaRules.sm} {
    flex-direction: row;
  }
`;

export const LeftColumn = styled.div<ColumnProps>`
  width: 100%;
  padding-right: 15px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  border-left: 5px solid var(--innotech-color);
  padding-left: 2rem;
  line-height: 3;
  h2 {
    font-size: 25px;
    margin: 0;
  }
  margin-bottom: 2rem;
  ${mediaRules.xsm} {
    width: 100%;
    h2 {
      font-size: 25px;
      margin: 0;
    }
  }
  height: fit-content;
  ${mediaRules.sm} {
    width: 100%;
    h2 {
      font-size: 25px;
      margin: 0;
    }
  }

  ${mediaRules.md} {
    max-width: 45%;
    h2 {
      font-size: 30px;
      margin: 0;
    }
  }

  ${mediaRules.lg} {
    max-width: 45%;
    h2 {
      font-size: 35px;
      margin: 0;
    }
  }
`;

export const Column = styled.div<ColumnProps>`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  ${mediaRules.sm} {
    width: 100%;
  }
  ${mediaRules.md} {
    max-width: 45%;
  }
  ${mediaRules.lg} {
    max-width: 55%;
  }
`;

export const FirstRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
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

export const Select = styled.select`
  width: 100%;
  padding: 15px;
  border-radius: 4px;
  font-size: 16px;
  background-color: var(--light-gray);
`;

export const ButtonContainer = styled.div`
  width: 100%;
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

export const Agreement = styled.div`
  margin-bottom: 20px;
  label {
    font-size: 14px;
    display: flex;
    align-items: center;
    input {
      margin-right: 8px;
    }
    a {
      color: #007cba;
      text-decoration: none;
    }
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

export const ErrorText = styled.p`
  color: red;
  font-size: 0.875rem;
  margin-top: 4px;
`;

export const Notification = styled.div`
  margin-top: 20px;
  font-size: 14px;
  background-color: #ffb900;
  color: white;
  padding: 15px 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  opacity: 1;
  text-align: left;
  border: 2px solid #beb71b;

  ${mediaRules.md} {
    width: 100%;
    padding: 12px 15px;
  }
`;

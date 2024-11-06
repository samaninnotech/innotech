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
  padding: 0 20px;
  padding-top: 110px;
  padding-bottom: 120px;
  background-image: url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-position: center right;
  background-size: auto;
  @media (max-width: 768px) {
    background-position: bottom center;
  }
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
    margin-right: 20px;
  }
  ${mediaRules.lg} {
    margin-right: 50px;
    max-width: 55%;
  }
`;

export const FirstRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const Header = styled.div`
  color: var(--text-black-color);
  margin: 1rem 0;
  font-size: 35px;
  font-weight: 600;
`;
export const RightHeader = styled.div`
  color: var(--text-black-color);
  margin: 1rem 0;
  font-size: 18px;
  font-weight: 600;
  ${mediaRules.sm} {
    font-size: 18px;
    padding-left: 30px;
  }
  ${mediaRules.md} {
    font-size: 24px;
    padding-left: 0px;
  }
`;

export const Subtitle = styled.h4`
  display: block;
  margin: 1rem 0;

  color: var(--text-gray-color);
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
export const InputLabel = styled.label`
  display: block;
  color: var(--text-gray-color);
  font-size: 14px;
`;
export const Input = styled.input`
  width: 100%;
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

export const TextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  border-radius: 4px;
  font-size: 16px;
  background-color: var(--light-gray);
  border: 1px solid transparent;
  color: var(--text-gray-color);

  &:focus {
    outline: none;
    color: var(--text-gray-color);
    background-color: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 15px;
  border-radius: 4px;
  font-size: 16px;
  background-color: var(--light-gray);
  &:focus {
    outline: none;
    color: var(--text-gray-color);
    background-color: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  }
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
export const ErrorText = styled.p`
  color: red;
  font-size: 0.875rem;
  margin-top: 4px;
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

"use client";
import React, { useEffect, useState } from "react";
import {
  Agreement,
  ButtonContainer,
  Column,
  Container,
  FirstRow,
  Form,
  FormItem,
  FormWrapper,
  Header,
  Input,
  Loader,
  Row,
  SectionWrapper,
  Select,
  Spacer,
  SubmitButton,
  Subtitle,
  TextArea,
} from "./GetInTouchSection.styled";

type GetInTouchSectionProps = {
  mainHeader: string;
  subtitle: string;
  options: { value: string }[]; // Array of objects with value key
  agreement: string;
  buttonLabel: string;
  rightHeader: string;
  backgroundImage: string;
};

const GetInTouchSection: React.FC<GetInTouchSectionProps> = ({
  mainHeader,
  subtitle,
  options,
  agreement,
  buttonLabel,
  rightHeader,
  backgroundImage,
}) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [description, setDescription] = useState("");
  const [isAgreementChecked, setIsAgreementChecked] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    setIsButtonEnabled(
      name.trim() !== "" &&
        surname.trim() !== "" &&
        email.trim() !== "" &&
        selectedOption !== "" &&
        description.trim() !== "" &&
        isAgreementChecked,
    );
  }, [name, surname, email, selectedOption, description, isAgreementChecked]);

  return (
    <SectionWrapper backgroundImage={backgroundImage}>
      <Container>
        <Row>
          <Column>
            <Header>{mainHeader}</Header>
            <Subtitle>{subtitle}</Subtitle>
            <Spacer />
            <FormWrapper>
              <Form>
                <Row>
                  <FirstRow>
                    <FormItem padding="20px">
                      <Input
                        type="text"
                        placeholder="Nome *"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </FormItem>
                    <FormItem>
                      <Input
                        type="text"
                        placeholder="Cognome *"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                        required
                      />
                    </FormItem>
                  </FirstRow>
                </Row>
                <FormItem>
                  <Input
                    type="email"
                    placeholder="E-mail *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </FormItem>
                <FormItem>
                  <Select
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                  >
                    {options.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.value}
                      </option>
                    ))}
                  </Select>
                </FormItem>
                <FormItem>
                  <TextArea
                    placeholder="Descrivi la tua richiesta. *"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </FormItem>
                <Agreement>
                  <label>
                    <input
                      type="checkbox"
                      checked={isAgreementChecked}
                      onChange={(e) => setIsAgreementChecked(e.target.checked)}
                      required
                    />
                    {agreement}
                  </label>
                </Agreement>
                <ButtonContainer>
                  <SubmitButton
                    type="submit"
                    isEnabled={isButtonEnabled}
                    disabled={!isButtonEnabled}
                  >
                    {buttonLabel}
                  </SubmitButton>
                </ButtonContainer>
                <Loader />
              </Form>
            </FormWrapper>
            <Spacer />
          </Column>
          <Column>
            <Spacer />
            <Header>{rightHeader}</Header>
            <Spacer />
          </Column>
        </Row>
      </Container>
    </SectionWrapper>
  );
};

export default GetInTouchSection;

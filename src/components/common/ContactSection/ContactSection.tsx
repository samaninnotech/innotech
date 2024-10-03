"use client";
import { PortableText } from "@portabletext/react";
import React, { useEffect, useState } from "react";
import components from "../BlockContent/components";
import {
  Agreement,
  ButtonContainer,
  Column,
  Container,
  FirstRow,
  Form,
  FormItem,
  FormWrapper,
  Input,
  LeftColumn,
  Loader,
  Row,
  SectionWrapper,
  Spacer,
  SubmitButton,
  TextArea,
} from "./ContactSection.styled";

type ContactSectionProps = {
  buttonLabel: string;
  rightHeader: any;
  agreement: string;
};

const ContactSection: React.FC<ContactSectionProps> = ({
  buttonLabel,
  rightHeader,
  agreement,
}) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [isAgreementChecked, setIsAgreementChecked] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    setIsButtonEnabled(
      name.trim() !== "" &&
        surname.trim() !== "" &&
        email.trim() !== "" &&
        description.trim() !== "" &&
        isAgreementChecked,
    );
  }, [name, surname, email, description, isAgreementChecked]);

  return (
    <SectionWrapper>
      <Container>
        <Row>
          {/* Column for the rightHeader */}
          <LeftColumn>
            <Spacer />
            <PortableText value={rightHeader} components={components} />
            <Spacer />
          </LeftColumn>

          {/* Column for the form */}
          <Column>
            <FormWrapper>
              <Form>
                <FirstRow>
                  <FormItem padding="20px">
                    <Input
                      type="text"
                      placeholder="Name *"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </FormItem>
                  <FormItem>
                    <Input
                      type="text"
                      placeholder="Last name *"
                      value={surname}
                      onChange={(e) => setSurname(e.target.value)}
                      required
                    />
                  </FormItem>
                </FirstRow>
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
                  <TextArea
                    placeholder="Describe your request. *"
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
        </Row>
      </Container>
    </SectionWrapper>
  );
};

export default ContactSection;

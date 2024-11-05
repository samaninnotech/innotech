"use client";
import React, { useState } from "react";
import SpinnerComponent from "../Spinner";
import {
  Agreement,
  ButtonContainer,
  CheckboxLabel,
  Column,
  Container,
  ErrorText,
  FirstRow,
  Form,
  FormItem,
  FormWrapper,
  Header,
  Input,
  Notification,
  RightHeader,
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
  rightHeader: string;
  backgroundImage: string;
  firstNameLabel: string;
  lastNameLabel: string;
  emailLabel: string;
  optionsLabel: string;
  options: { value: string }[];
  messageLabel: string;
  agreementLabel: string;
  submitText: string;
  notificationText: string;
  receiverEmail: string;
  senderEmail: string;
  senderPassword: string;
};

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  selectedOption: string;
  presentation: string;
  agreement: boolean;
};

const GetInTouchSection: React.FC<GetInTouchSectionProps> = ({
  mainHeader,
  subtitle,
  optionsLabel,
  options,
  rightHeader,
  backgroundImage,
  firstNameLabel,
  lastNameLabel,
  emailLabel,
  messageLabel,
  agreementLabel,
  submitText,
  receiverEmail,
  senderEmail,
  senderPassword,
  notificationText,
}) => {
  const [formValues, setFormValues] = useState<FormValues>({
    firstName: "",
    lastName: "",
    email: "",
    selectedOption: "",
    presentation: "",
    agreement: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  const validateField = (name: string, value: string | boolean) => {
    const newErrors: Record<string, string> = {};

    if (name === "firstName" && (!value || /\d/.test(value as string))) {
      newErrors.firstName =
        "First name is required and must not contain numbers.";
    }

    if (name === "lastName" && (!value || /\d/.test(value as string))) {
      newErrors.lastName =
        "Last name is required and must not contain numbers.";
    }

    if (
      name === "email" &&
      (!value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value as string))
    ) {
      newErrors.email = "Valid email is required.";
    }

    if (name === "agreement" && !value) {
      newErrors.agreement = "You must agree to the terms.";
    }

    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, type, value } = e.target;

    const newValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: newValue,
    }));

    setErrors((prevErrors) => {
      const { [name]: removedError, ...restErrors } = prevErrors;
      return restErrors;
    });
  };

  const validateForm = () => {
    const validationErrors = Object.entries(formValues).reduce(
      (acc, [key, value]) => {
        const newErrors = validateField(key, value);
        return { ...acc, ...newErrors };
      },
      {} as Record<string, string>,
    );

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact-us/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formValues.email,
          firstName: formValues.firstName,
          lastName: formValues.lastName,
          senderEmail,
          senderPassword,
          receiverEmail,
        }),
      });

      if (response.ok) {
        setNotification(notificationText);
        setTimeout(() => {
          setNotification(null);
        }, 3000);
      } else {
        setNotification("Failed to send the email. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid =
    formValues.firstName &&
    formValues.lastName &&
    formValues.email &&
    formValues.agreement &&
    Object.keys(errors).length === 0;

  return (
    <>
      {isSubmitting && <SpinnerComponent show={true} />}
      <SectionWrapper backgroundImage={backgroundImage}>
        <Container>
          <Row>
            <Column>
              <Header>{mainHeader}</Header>
              <Subtitle>{subtitle}</Subtitle>
              <Spacer />
              <FormWrapper>
                <Form onSubmit={handleSubmit} noValidate>
                  <Row>
                    <FirstRow>
                      <FormItem padding="20px">
                        <Input
                          type="text"
                          name="firstName"
                          value={formValues.firstName}
                          onChange={handleChange}
                          placeholder={firstNameLabel}
                        />
                        {errors.firstName && (
                          <ErrorText>{errors.firstName}</ErrorText>
                        )}
                      </FormItem>
                      <FormItem>
                        <Input
                          type="text"
                          name="lastName"
                          value={formValues.lastName}
                          onChange={handleChange}
                          placeholder={lastNameLabel}
                        />
                        {errors.lastName && (
                          <ErrorText>{errors.lastName}</ErrorText>
                        )}
                      </FormItem>
                    </FirstRow>
                  </Row>
                  <FormItem>
                    <Input
                      type="email"
                      name="email"
                      value={formValues.email}
                      onChange={handleChange}
                      placeholder={emailLabel}
                    />
                    {errors.email && <ErrorText>{errors.email}</ErrorText>}
                  </FormItem>
                  <FormItem>
                    <Select
                      name="selectedOption"
                      value={formValues.selectedOption}
                      onChange={handleChange}
                    >
                      <option value="">{optionsLabel}</option>
                      {options.map((option, index) => (
                        <option key={index} value={option.value}>
                          {option.value}
                        </option>
                      ))}
                    </Select>
                  </FormItem>
                  <FormItem>
                    <TextArea
                      name="presentation"
                      value={formValues.presentation}
                      onChange={handleChange}
                      placeholder={messageLabel}
                    />
                  </FormItem>
                  <Agreement>
                    <CheckboxLabel>
                      <input
                        type="checkbox"
                        name="agreement"
                        checked={formValues.agreement}
                        onChange={handleChange}
                      />
                      {agreementLabel}
                    </CheckboxLabel>
                    {errors.agreement && (
                      <ErrorText>{errors.agreement}</ErrorText>
                    )}
                  </Agreement>
                  <ButtonContainer>
                    <SubmitButton
                      type="submit"
                      disabled={isSubmitting || !isFormValid}
                      value={submitText}
                    />
                  </ButtonContainer>
                  {notification && (
                    <FormItem>
                      <Notification>{notification}</Notification>
                    </FormItem>
                  )}
                </Form>
              </FormWrapper>
            </Column>
            <Column>
              <RightHeader>{rightHeader}</RightHeader>
              <Spacer />
            </Column>
          </Row>
        </Container>
      </SectionWrapper>
    </>
  );
};

export default GetInTouchSection;

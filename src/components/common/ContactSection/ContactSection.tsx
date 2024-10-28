"use client";
import { PortableText } from "@portabletext/react";
import React, { useState } from "react";
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
  SubmitButton,
  TextArea,
} from "./ContactSection.styled";

type ContactSectionProps = {
  firstNameLabel: string;
  lastNameLabel: string;
  emailLabel: string;
  messageLabel: string;
  agreementLabel: string;
  submitText: string;
  senderEmail: string;
  senderPassword: string;
  leftHeader: any;
  isLoading?: boolean;
};

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  agreement: boolean;
};

const ContactSection: React.FC<ContactSectionProps> = ({
  firstNameLabel,
  lastNameLabel,
  emailLabel,
  messageLabel,
  agreementLabel,
  submitText,
  leftHeader,
  senderEmail,
  senderPassword,
  isLoading = false, // Default to not loading
}) => {
  const [formValues, setFormValues] = useState<FormValues>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    agreement: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  const validateField = (name: string, value: string | boolean) => {
    const newErrors: Record<string, string> = {};

    if (name === "firstName") {
      if (!value || /\d/.test(value as string)) {
        newErrors.firstName =
          "First name is required and must not contain numbers.";
      }
    }

    if (name === "lastName") {
      if (!value || /\d/.test(value as string)) {
        newErrors.lastName =
          "Last name is required and must not contain numbers.";
      }
    }

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value || !emailRegex.test(value as string)) {
        newErrors.email = "Valid email is required.";
      }
    }

    if (name === "message") {
      if (!value) {
        newErrors.message = "Message is required.";
      }
    }

    if (name === "agreement" && !value) {
      newErrors.agreement = "You must agree to the terms.";
    }

    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    const { name, type, value } = e.target;

    // Check if the target is an input element and has a 'checked' property
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
      const response = await fetch("/api/notify-applicant/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formValues.email,
          firstName: formValues.firstName,
          status: formValues.message,
          senderEmail,
          senderPassword,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        console.log(result.message);
        setNotification(`Message sent successfully to ${formValues.email}.`);
        setTimeout(() => {
          setNotification(null);
          // Optionally, reset form values here
          setFormValues({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
            agreement: false,
          });
        }, 3000);
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid =
    formValues.firstName &&
    formValues.lastName &&
    formValues.email &&
    formValues.message &&
    formValues.agreement &&
    Object.keys(errors).length === 0;

  return (
    <Container>
      {notification && <div>{notification}</div>}
      {isSubmitting && <Loader />}
      <SectionWrapper>
        <Row>
          <LeftColumn>
            <PortableText value={leftHeader} components={components} />
          </LeftColumn>
          <Column>
            <FormWrapper>
              <Form noValidate onSubmit={handleSubmit}>
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
                      <p style={{ color: "red" }}>{errors.firstName}</p>
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
                      <p style={{ color: "red" }}>{errors.lastName}</p>
                    )}
                  </FormItem>
                </FirstRow>
                <FormItem>
                  <Input
                    type="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    placeholder={emailLabel}
                  />
                  {errors.email && (
                    <p style={{ color: "red" }}>{errors.email}</p>
                  )}
                </FormItem>
                <FormItem>
                  <TextArea
                    name="message"
                    value={formValues.message}
                    onChange={handleChange}
                    placeholder={messageLabel}
                  />
                  {errors.message && (
                    <p style={{ color: "red" }}>{errors.message}</p>
                  )}
                </FormItem>
                <Agreement>
                  <input
                    type="checkbox"
                    name="agreement"
                    checked={formValues.agreement}
                    onChange={handleChange}
                  />
                  {agreementLabel}
                  {errors.agreement && (
                    <p style={{ color: "red" }}>{errors.agreement}</p>
                  )}
                </Agreement>
                <ButtonContainer>
                  <SubmitButton
                    type="submit"
                    disabled={isSubmitting || !isFormValid}
                    value={submitText}
                  ></SubmitButton>
                </ButtonContainer>
              </Form>
            </FormWrapper>
          </Column>
        </Row>
      </SectionWrapper>
    </Container>
  );
};

export default ContactSection;

// const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
//   const { name, type, value } = e.target;

//   // Check if the target is an input element and has a 'checked' property
//   const newValue = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

//   setFormValues((prevValues) => ({
//     ...prevValues,
//     [name]: newValue,
//   }));

//   setErrors((prevErrors) => {
//     const { [name]: removedError, ...restErrors } = prevErrors;
//     return restErrors;
//   });
// };

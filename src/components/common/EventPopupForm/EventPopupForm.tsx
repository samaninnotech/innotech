"use client";

import React, { useState } from "react";
import SpinnerComponent from "../Spinner";
import {
  Backdrop,
  CheckboxLabel,
  CloseButton,
  Column,
  FormField,
  FormWrapper,
  Input,
  InputLabel,
  Notification,
  PopupContainer,
  PopupContent,
  Row,
  SubmitButton,
  TextColumn,
} from "./EventPopupForm.styled";

type EventPopupFormProps = {
  header: string;
  firstNameLabel: string;
  lastNameLabel: string;
  companyLabel: string;
  invitedByLabel?: string;
  roleLabel?: string;
  phoneLabel: string;
  emailLabel: string;
  agreementLabel: string;
  submitText: string;
  notificationText: string;
  senderEmail: string;
  senderPassword: string;
  receiverEmail: string;
  onClose: () => void;
};

type FormValues = {
  firstName: string;
  lastName: string;
  company: string;
  invitedBy?: string;
  role: string;
  phone: string;
  email: string;
  agreement: boolean;
};

const EventPopupForm: React.FC<EventPopupFormProps> = ({
  header,
  firstNameLabel,
  lastNameLabel,
  companyLabel,
  invitedByLabel,
  roleLabel,
  phoneLabel,
  emailLabel,
  agreementLabel,
  submitText,
  notificationText,
  senderEmail,
  senderPassword,
  receiverEmail,
  onClose,
}) => {
  const [formValues, setFormValues] = useState<FormValues>({
    firstName: "",
    lastName: "",
    company: "",
    invitedBy: "",
    role: "",
    phone: "",
    email: "",
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

    if (name === "phone") {
      if (!value || /[a-zA-Z]/.test(value as string)) {
        newErrors.phone =
          "Phone number is required and must not contain letters.";
      }
    }

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value || !emailRegex.test(value as string)) {
        newErrors.email = "Valid email is required.";
      }
    }

    if (name === "agreement" && !value) {
      newErrors.agreement = "You must agree to the terms.";
    }

    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: type === "checkbox" ? checked : value,
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
      const response = await fetch("/api/register-event/", {
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
        setNotification(`${notificationText}`);
        setTimeout(() => {
          setNotification(null);
          onClose();
        }, 3000);
      } else {
        setNotification("Failed to register. Please try again.");
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
    formValues.phone &&
    formValues.email &&
    formValues.agreement &&
    Object.keys(errors).length === 0;

  return (
    <>
      <Backdrop onClick={onClose} />
      <PopupContainer>
        <CloseButton onClick={onClose}>✖</CloseButton>
        <PopupContent tabIndex={0}>
          <Row>
            <TextColumn>
              <p>{header}</p>
            </TextColumn>
            <Column>
              <FormWrapper>
                <form noValidate onSubmit={handleSubmit}>
                  <FormField>
                    <InputLabel>{firstNameLabel}</InputLabel>
                    <Input
                      type="text"
                      name="firstName"
                      value={formValues.firstName}
                      onChange={handleChange}
                    />
                    {errors.firstName && (
                      <p style={{ color: "red" }}>{errors.firstName}</p>
                    )}
                  </FormField>
                  <FormField>
                    <InputLabel>{lastNameLabel}</InputLabel>
                    <Input
                      type="text"
                      name="lastName"
                      value={formValues.lastName}
                      onChange={handleChange}
                    />
                    {errors.lastName && (
                      <p style={{ color: "red" }}>{errors.lastName}</p>
                    )}
                  </FormField>
                  <FormField>
                    <InputLabel>{companyLabel}</InputLabel>
                    <Input
                      type="text"
                      name="company"
                      value={formValues.company}
                      onChange={handleChange}
                    />
                  </FormField>

                  {invitedByLabel && (
                    <FormField>
                      <InputLabel>{invitedByLabel}</InputLabel>
                      <Input
                        type="text"
                        name="invitedBy"
                        value={formValues.invitedBy}
                        onChange={handleChange}
                      />
                    </FormField>
                  )}

                  {roleLabel && (
                    <FormField>
                      <InputLabel>{roleLabel}</InputLabel>
                      <Input
                        type="text"
                        name="role"
                        value={formValues.role}
                        onChange={handleChange}
                      />
                    </FormField>
                  )}

                  <FormField>
                    <InputLabel>{phoneLabel}</InputLabel>
                    <Input
                      type="text"
                      name="phone"
                      value={formValues.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && (
                      <p style={{ color: "red" }}>{errors.phone}</p>
                    )}
                  </FormField>
                  <FormField>
                    <InputLabel>{emailLabel}</InputLabel>
                    <Input
                      type="email"
                      name="email"
                      value={formValues.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <p style={{ color: "red" }}>{errors.email}</p>
                    )}
                  </FormField>
                  <FormField>
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
                      <p style={{ color: "red" }}>{errors.agreement}</p>
                    )}
                  </FormField>

                  <SubmitButton
                    type="submit"
                    disabled={isSubmitting || !isFormValid}
                    value={submitText}
                  ></SubmitButton>
                  {isSubmitting && <SpinnerComponent show={true} />}
                  {notification && <Notification>{notification}</Notification>}
                </form>
              </FormWrapper>
            </Column>
          </Row>
        </PopupContent>
      </PopupContainer>
    </>
  );
};

export default EventPopupForm;

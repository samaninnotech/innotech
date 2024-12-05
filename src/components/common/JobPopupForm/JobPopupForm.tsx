"use client";

import React, { useState } from "react";
import SpinnerComponent from "../Spinner";
import {
  Backdrop,
  CheckboxLabel,
  CloseButton,
  FormField,
  FormWrapper,
  Header,
  Input,
  Notification,
  PopupContainer,
  PopupContent,
  Row,
  SubmitButton,
  Subtitle,
  TextArea,
  TextColumn,
} from "./JobPopupForm.styled";

type JobPopupFormProps = {
  header: string;
  subtitle: string;
  firstNameLabel: string;
  lastNameLabel: string;
  phoneLabel: string;
  emailLabel: string;
  presentationLabel: string;
  fileUploadLabel: string;
  agreementLabel: string;
  submitText: string;
  notificationText: string;
  receiverEmail: string;
  senderEmail: string;
  senderPassword: string;
  onClose: () => void;
};

type FormValues = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  presentation: string;
  cv: File | null;
  agreement: boolean;
};

const JobPopupForm: React.FC<JobPopupFormProps> = ({
  header,
  subtitle,
  firstNameLabel,
  lastNameLabel,
  phoneLabel,
  emailLabel,
  presentationLabel,
  fileUploadLabel,
  agreementLabel,
  submitText,
  notificationText,
  senderEmail,
  senderPassword,
  receiverEmail,
  onClose,
}) => {
  console.log(senderEmail, senderPassword);
  const [formValues, setFormValues] = useState<FormValues>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    presentation: "",
    cv: null,
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, type, checked, value, files } = e.target as HTMLInputElement;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file" && files
            ? files[0]
            : value,
    }));

    setErrors((prevErrors) => {
      const { [name]: removedError, ...restErrors } = prevErrors;
      return restErrors;
    });
  };

  const validateForm = () => {
    const validationErrors = Object.entries(formValues).reduce(
      (acc, [key, value]) => {
        // Skip validation for `cv` as it can be `File | null`
        if (key === "cv") {
          if (!value) {
            return { ...acc, cv: "CV upload is required." };
          }
          return acc;
        }

        const newErrors = validateField(key, value as string | boolean); // Ensure only string or boolean is passed
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
      // Prepare FormData to handle the file and other form data
      const formData = new FormData();
      formData.append("firstName", formValues.firstName);
      formData.append("lastName", formValues.lastName);
      formData.append("phone", formValues.phone);
      formData.append("email", formValues.email);
      formData.append("presentation", formValues.presentation);
      formData.append("senderEmail", senderEmail);
      formData.append("senderPassword", senderPassword);
      formData.append("receiverEmail", receiverEmail); // Append receiver email
      formData.append("cv", formValues.cv as File); // Append the file

      // Call the combined API
      const response = await fetch("/api/job-application", {
        method: "POST",
        body: formData, // Use FormData
        // No need for headers: browser sets the correct Content-Type
      });

      if (!response.ok) {
        const errorDetails = await response.text();
        console.error("API error:", errorDetails);
        setNotification("Failed to send emails. Please try again.");
        return;
      }

      const result = await response.json();
      setNotification(result.message);
      setTimeout(() => {
        setNotification(null);
        onClose();
      }, 3000);
    } catch (error) {
      console.error("Error in handleSubmit:", error);
      setNotification("An error occurred. Please try again.");
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
              <Header>{header}</Header>
              <Subtitle>{subtitle}</Subtitle>
            </TextColumn>
            <FormWrapper>
              <form noValidate onSubmit={handleSubmit}>
                <FormField style={{ marginBottom: "0" }}>
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
                </FormField>
                <FormField>
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
                </FormField>
                <FormField style={{ marginBottom: "0" }}>
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
                </FormField>
                <FormField>
                  <Input
                    type="text"
                    name="phone"
                    value={formValues.phone}
                    onChange={handleChange}
                    placeholder={phoneLabel}
                  />
                  {errors.phone && (
                    <p style={{ color: "red" }}>{errors.phone}</p>
                  )}
                </FormField>
                <FormField>
                  <TextArea
                    name="presentation"
                    value={formValues.presentation}
                    onChange={handleChange}
                    placeholder={presentationLabel}
                  />
                </FormField>
                <FormField>
                  {fileUploadLabel}&nbsp;&nbsp;
                  <input type="file" name="cv" onChange={handleChange} />
                  {errors.cv && <p style={{ color: "red" }}>{errors.cv}</p>}
                </FormField>
                <CheckboxLabel>
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
                </CheckboxLabel>
                <SubmitButton
                  type="submit"
                  disabled={!isFormValid}
                  value={submitText}
                ></SubmitButton>
                {isSubmitting && <SpinnerComponent show={true} />}
                {notification && <Notification>{notification}</Notification>}
              </form>
            </FormWrapper>
          </Row>
        </PopupContent>
      </PopupContainer>
    </>
  );
};

export default JobPopupForm;

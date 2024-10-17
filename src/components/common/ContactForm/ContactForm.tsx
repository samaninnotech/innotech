"use client";

import { PortableText } from "@portabletext/react";
import React, { useState } from "react";
import components from "../BlockContent/components";
import SpinnerComponent from "../Spinner";
import {
  CheckboxLabel,
  ContactFormContainer,
  ContactFormContent,
  FormField,
  FormWrapper,
  Input,
  InputLabel,
  Notification,
  SubmitButton,
  TextArea,
} from "./ContactForm.styled";

type ContactFormProps = {
  header: any;
  firstName: string;
  lastName: string;
  company: string;
  phone: string;
  email: string;
  agreement: string;
  submitText: string;
  message: string;
  senderEmail: string;
  senderPassword: string;
};

// Define a type for form values
type FormValues = {
  firstName: string;
  lastName: string;
  company?: string; // Make company optional
  phone: string;
  email: string;
  message: string;
  agreement: boolean;
};

const ContactForm: React.FC<ContactFormProps> = ({
  header,
  firstName,
  lastName,
  company,
  phone,
  email,
  message,
  agreement,
  submitText,
  senderEmail,
  senderPassword,
}) => {
  const [formValues, setFormValues] = useState<FormValues>({
    firstName: "",
    lastName: "",
    company: "", // Set initial value for company
    phone: "",
    email: "",
    message: "",
    agreement: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<string | null>(null); // State for floating notification

  const validateField = (name: string, value: string | boolean) => {
    const newErrors: Record<string, string> = {};

    // Validate first name
    if (name === "firstName") {
      if (!value || /\d/.test(value as string)) {
        newErrors.firstName =
          "First name is required and must not contain numbers.";
      }
    }

    // Validate last name
    if (name === "lastName") {
      if (!value || /\d/.test(value as string)) {
        newErrors.lastName =
          "Last name is required and must not contain numbers.";
      }
    }

    // Validate phone number
    if (name === "phone") {
      if (!value || /[a-zA-Z]/.test(value as string)) {
        newErrors.phone =
          "Phone number is required and must not contain letters.";
      }
    }

    // Validate email
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value || !emailRegex.test(value as string)) {
        newErrors.email = "Valid email is required.";
      }
    }

    // Check if agreement is ticked
    if (name === "agreement" && !value) {
      newErrors.agreement = "You must agree to the terms.";
    }

    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, type, value } = e.target;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));

    // Clear error for the changed field
    setErrors((prevErrors) => {
      const { [name]: removedError, ...restErrors } = prevErrors;
      return restErrors;
    });
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    const newErrors = validateField(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      ...newErrors,
    }));
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
    if (!validateForm()) return; // Only proceed if the form is valid

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formValues.email,
          senderEmail,
          senderPassword,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        console.log(result.message);
        setNotification(`Email sent successfully to ${formValues.email}.`); // Set notification message
        setTimeout(() => {
          setNotification(null); // Clear notification after 3 seconds
        }, 3000); // Delay before closing the popup
      } else {
        console.error(result.message);
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
      {notification && <Notification>{notification}</Notification>}
      {isSubmitting && <SpinnerComponent show={true} />}{" "}
      {/* Show spinner while submitting */}
      <ContactFormContainer>
        <ContactFormContent>
          <PortableText value={header} components={components} />
          <FormWrapper>
            <form noValidate onSubmit={handleSubmit}>
              <FormField>
                <InputLabel>{firstName}</InputLabel>
                <Input
                  type="text"
                  name="firstName"
                  value={formValues.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.firstName && (
                  <p style={{ color: "red" }}>{errors.firstName}</p>
                )}
              </FormField>
              <FormField>
                <InputLabel>{lastName}</InputLabel>
                <Input
                  type="text"
                  name="lastName"
                  value={formValues.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.lastName && (
                  <p style={{ color: "red" }}>{errors.lastName}</p>
                )}
              </FormField>
              <FormField>
                <InputLabel>{company}</InputLabel>
                <Input
                  type="text"
                  name="company"
                  value={formValues.company}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </FormField>
              <FormField>
                <InputLabel>{phone}</InputLabel>
                <Input
                  type="text"
                  name="phone"
                  value={formValues.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
              </FormField>
              <FormField>
                <InputLabel>{email}</InputLabel>
                <Input
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
              </FormField>
              <FormField>
                <InputLabel>{message}</InputLabel>
                <TextArea
                  name="message"
                  value={formValues.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.message && (
                  <p style={{ color: "red" }}>{errors.message}</p>
                )}
              </FormField>
              <FormField>
                <CheckboxLabel>
                  <input
                    type="checkbox"
                    name="agreement"
                    checked={formValues.agreement}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span>&nbsp;&nbsp;{agreement}</span>
                </CheckboxLabel>
                {errors.agreement && (
                  <p style={{ color: "red" }}>{errors.agreement}</p>
                )}
              </FormField>
              <FormField>
                <SubmitButton
                  type="submit"
                  value={submitText}
                  disabled={isSubmitting || !isFormValid}
                />
              </FormField>
            </form>
          </FormWrapper>
        </ContactFormContent>
      </ContactFormContainer>
    </>
  );
};

export default ContactForm;

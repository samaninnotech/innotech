"use client";

import { sanityUrlFor } from "@/sanity/sanity-client";
import React, { useState } from "react";
import SpinnerComponent from "../Spinner";
import {
  Backdrop,
  CheckboxLabel,
  CloseButton,
  Column,
  FormField,
  FormWrapper,
  ImageColumn,
  ImageWrap,
  Input,
  InputLabel,
  Notification,
  PopupContainer,
  PopupContent,
  Row,
  SubmitButton,
  TextColumn,
  Thumbnail,
} from "./PopupForm.styled";

type Brochure = {
  title?: string | null;
  description?: string | null;
  file?: {
    url: string;
  } | null;
};

type PopupFormProps = {
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
  thumbnail?: string;
  brochure?: Brochure;
  senderEmail: string;
  senderPassword: string;
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

const PopupForm: React.FC<PopupFormProps> = ({
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
  thumbnail,
  senderEmail,
  senderPassword,
  brochure,
  onClose,
}) => {
  const brochureUrl = brochure?.file?.url || null;

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
  // const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  // useEffect(() => {
  //   setIsButtonEnabled(
  //     formValues.firstName.trim() !== "" &&
  //       formValues.lastName.trim() !== "" &&
  //       formValues.company.trim() !== "" &&
  //       formValues.role.trim() !== "" &&
  //       formValues.email.trim() !== "" &&
  //       formValues.agreement
  //   );
  // }, [formValues.firstName, formValues.lastName, formValues.company, formValues.role, formValues.email,formValues.agreement ]);

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

    // Optional: Do not validate invitedBy
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
      const response = await fetch("/api/send-brochure/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formValues.email,
          brochureUrl,
          senderEmail,
          senderPassword,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        console.log(result.message);
        setNotification(`Email sent successfully to ${formValues.email}.`);
        setTimeout(() => {
          setNotification(null);
          onClose();
        }, 3000);
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
      {isSubmitting && <SpinnerComponent show={true} />}
      <Backdrop onClick={onClose} />
      <PopupContainer hasThumbnail={!!thumbnail}>
        <CloseButton onClick={onClose}>✖</CloseButton>
        <PopupContent tabIndex={0} fullWidth={!thumbnail}>
          <Row fullWidth={!thumbnail}>
            <Column>
              <TextColumn>
                <p>{header}</p>
              </TextColumn>
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
                </form>
              </FormWrapper>
            </Column>
            {thumbnail && (
              <ImageColumn>
                <ImageWrap>
                  <Thumbnail
                    src={sanityUrlFor(thumbnail).width(500).url()}
                    alt="Thumbnail"
                    width={200}
                    height={200}
                  />
                </ImageWrap>
              </ImageColumn>
            )}
          </Row>
        </PopupContent>
      </PopupContainer>
    </>
  );
};

export default PopupForm;

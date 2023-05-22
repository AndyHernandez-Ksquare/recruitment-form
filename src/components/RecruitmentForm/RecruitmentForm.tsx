import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormLabel,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { PersonalInformation } from "../PersonalInformation";
import { AddressInformation } from "../AddressInformation";
import { AddressExtraInfo } from "../AddressExtraInfo";
import { useFormik } from "formik";
import { ExtraPersonalInfo } from "../ExtraPersonalInfo";
import { GobernamentalInfo } from "../GobernamentalInfo";
import { BankAccountInfo } from "../BankAccountInfo";
import { Skills } from "../Skills";
import { FormValues } from "../../interfaces/Form";
import useFormValuesAndValidation from "../../hooks/valuesHooks/useFormValuesAndValidation";
import ModalForm from "./ModalForm";

export const RecruitmentForm = () => {
  const { valuesForm, validationSchema } = useFormValuesAndValidation();
  const [activeStep, setActiveStep] = useState<number>(0);
  const [formSubmitted, setFormSubmitted] = useState<FormValues>();

  const formik = useFormik<FormValues>({
    initialValues: valuesForm,

    validationSchema: validationSchema,
    onSubmit: (value) => {
      setFormSubmitted(value);
    },
  });

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    setFieldTouched,
  } = formik;

  const steps = [
    "Personal Information",
    "Address Information",
    "Address Extra Information",
    "Gobernamental Information",
    "Extra Personal Information",
    "Bank Account Information",
    "Skills",
    "Disclaimer Information",
  ];

  const isSubmitDisabled =
    Object.keys(errors).length > 0 || Object.keys(touched).length === 0;

  const renderFormStep = () => {
    switch (activeStep) {
      case 0:
        return (
          <PersonalInformation
            errors={errors}
            touched={touched}
            values={values}
            handleChange={handleChange}
            handleBlur={handleBlur}
            setFieldValue={setFieldValue}
          />
        );
      case 1:
        return (
          <AddressInformation
            errors={errors}
            touched={touched}
            values={values}
            handleChange={handleChange}
            handleBlur={handleBlur}
            setFieldValue={setFieldValue}
            setFieldTouched={setFieldTouched}
          />
        );
      case 2:
        return (
          <AddressExtraInfo
            errors={errors}
            touched={touched}
            values={values}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        );
      case 3:
        return (
          <GobernamentalInfo
            errors={errors}
            touched={touched}
            values={values}
            handleChange={handleChange}
            handleBlur={handleBlur}
            setFieldValue={setFieldValue}
            setFieldTouched={setFieldTouched}
          />
        );
      case 4:
        return (
          <ExtraPersonalInfo
            errors={errors}
            touched={touched}
            values={values}
            handleChange={handleChange}
            handleBlur={handleBlur}
            setFieldValue={setFieldValue}
            setFieldTouched={setFieldTouched}
          />
        );
      case 5:
        return (
          <BankAccountInfo
            errors={errors}
            touched={touched}
            values={values}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        );
      case 6:
        return (
          <Skills
            errors={errors}
            touched={touched}
            values={values}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        );
      case 7:
        return (
          <Box>
            <FormLabel htmlFor="agreeWithTerms">
              Do you agree with these terms?
            </FormLabel>
            <Checkbox
              id="agreeWithTerms"
              name="agreeWithTerms"
              checked={values.agreeWithTerms}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Typography
              variant="h1"
              sx={{ fontSize: 32, marginTop: -30, width: 400 }}
            >
              By pressing submit you're affirming that the previous information
              is yours and therefore allowed to share with us
            </Typography>
          </Box>
        );
      default:
        return null;
    }
  };

  const handleNext = () => {
    setActiveStep((prev) => {
      if (prev < steps.length - 1) {
        return prev + 1;
      }
      return prev;
    });
  };

  const handlePrevious = () => {
    setActiveStep((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return prev;
    });
  };
  return (
    <Box>
      <Stepper sx={{ marginTop: 5 }} activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Button onClick={handlePrevious}>Go to previous step</Button>
        <Button onClick={handleNext}>Go to next step</Button>
      </Box>
      <form
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          minHeight: "90vh",
          maxHeight: "200vh",
        }}
        onSubmit={handleSubmit}
      >
        <Box>{renderFormStep()}</Box>
        <Button sx={{ marginTop: 5 }} disabled={isSubmitDisabled} type="submit">
          Submit
        </Button>
        <ModalForm formValues={formSubmitted} />
      </form>
    </Box>
  );
};

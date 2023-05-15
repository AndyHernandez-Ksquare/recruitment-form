import React from "react";
import { Box } from "@mui/material";
import { PersonalInformation } from "../PersonalInformation";
import { AddressInformation } from "../AddressInformation";
import { AddressExtraInfo } from "../AddressExtraInfo";
import { useFormik } from "formik";
import { PersonalInformationValues } from "../../interfaces/PersonalInformation";
import usePersonalInformationValidation from "../../validationHooks/usePersonalInformationValidation";
import useAddressInformationValidation from "../../validationHooks/useAddressInformationValidation";
import { AddressInformationValues } from "../../interfaces/AddressInformation";
import { AddressExtraInfoValues } from "../../interfaces/AddressExtraInfo";
import useAddressExtraInfoValidation from "../../validationHooks/useAddressExtraInfoValidation";
import useExtraPersonalInfoValidation from "../../validationHooks/useExtraPersonalInfoValidation";
import { ExtraPersonalInfoValues } from "../../interfaces/ExtraPersonalInfo";
import { ExtraPersonalInfo } from "../ExtraPersonalInfo";
// This type is important so that I can pass the same props to all components
type FormValues = PersonalInformationValues &
  AddressInformationValues &
  AddressExtraInfoValues &
  ExtraPersonalInfoValues;

export const RecruitmentForm = () => {
  const { valuesPersonalInformation, validationPersonalInformation } =
    usePersonalInformationValidation();

  const { valuesAddresslInformation, validationAddressInformation } =
    useAddressInformationValidation();

  const { valuesAddressExtraInfo, validationAddressExtraInfo } =
    useAddressExtraInfoValidation();

  const { valuesExtraPersonalInfo, validationExtraPersonalInfo } =
    useExtraPersonalInfoValidation();

  const combinedValidation = (values: FormValues) => {
    const errorsFromPersonalInformationValidation =
      validationPersonalInformation(values);
    const errorsFromAddressInformationValidation =
      validationAddressInformation(values);
    const errorsFromAddressExtraInfoValidation =
      validationAddressExtraInfo(values);
    const errorsFromExtraPersonalInfo = validationExtraPersonalInfo(values);

    return {
      ...errorsFromPersonalInformationValidation,
      ...errorsFromAddressInformationValidation,
      ...errorsFromAddressExtraInfoValidation,
      ...errorsFromExtraPersonalInfo,
    };
  };

  const formik = useFormik<FormValues>({
    initialValues: {
      ...valuesPersonalInformation,
      ...valuesAddresslInformation,
      ...valuesAddressExtraInfo,
      ...valuesExtraPersonalInfo,
    },
    validate: combinedValidation,
    onSubmit: (value) => {
      alert(JSON.stringify(value));
    },
  });

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    formik;

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        {" "}
        <PersonalInformation
          errors={errors}
          touched={touched}
          values={values}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        <AddressInformation
          errors={errors}
          touched={touched}
          values={values}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        <AddressExtraInfo
          errors={errors}
          touched={touched}
          values={values}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        <ExtraPersonalInfo
          errors={errors}
          touched={touched}
          values={values}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        <button type="submit">Submit</button>
      </form>
    </Box>
  );
};

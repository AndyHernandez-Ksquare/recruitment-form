import React from "react";
import { Box } from "@mui/material";
import { PersonalInformation } from "../PersonalInformation";
import { AddressInformation } from "../AddressInformation";
import { AddressExtraInfo } from "../AddressExtraInfo";
import { useFormik } from "formik";
import { PersonalInformationValues } from "../../interfaces/PersonalInformation";
import usePersonalInformationValidation from "../../validationHooks/usePersonalInformationValidation";
import useAddressInformationValidation from "../../validationHooks/useAddressInformationValidation";
import { AddressInformationValues } from "../../interfaces/AddressInformationValidation";
import { AddressExtraInfoValues } from "../../interfaces/AddressExtraInfo";
import useAddressExtraInfo from "../../validationHooks/useAddressExtraInfoValidation";
import useAddressExtraInfoValidation from "../../validationHooks/useAddressExtraInfoValidation";
// This type is important so that I can pass the same props to all components
type FormValues = PersonalInformationValues &
  AddressInformationValues &
  AddressExtraInfoValues;

export const RecruitmentForm = () => {
  // Used let so that I can change the value of values variable later on
  let { valuesPersonalInformation, validationPersonalInformation } =
    usePersonalInformationValidation();

  let { valuesAddresslInformation, validationAddressInformation } =
    useAddressInformationValidation();

  let { valuesAddressExtraInfo, validationAddressExtraInfo } =
    useAddressExtraInfoValidation();

  const combinedValidation = (values: FormValues) => {
    const errorsFromPersonalInformationValidation =
      validationPersonalInformation(values);
    const errorsFromAddressInformationValidation =
      validationAddressInformation(values);
    const errorsFromAddressExtraInfoValidation =
      validationAddressExtraInfo(values);

    return {
      ...errorsFromPersonalInformationValidation,
      ...errorsFromAddressInformationValidation,
      ...errorsFromAddressExtraInfoValidation,
    };
  };

  const formik = useFormik<FormValues>({
    initialValues: {
      ...valuesPersonalInformation,
      ...valuesAddresslInformation,
      ...valuesAddressExtraInfo,
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
        <button type="submit">Submit</button>
      </form>
    </Box>
  );
};

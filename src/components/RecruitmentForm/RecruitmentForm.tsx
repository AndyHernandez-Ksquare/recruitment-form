import React from "react";
import { Box } from "@mui/material";
import { PersonalInformation } from "../PersonalInformation";
import { AddressInformation } from "../AddressInformation";
import { AddressExtraInfo } from "../AddressExtraInfo";
import { useFormik } from "formik";
import { PersonalInformationValues } from "../../interfaces/usePersonalInformation";
import usePersonalInformationValidation from "../../validationHooks/usePersonalInformationValidation";
import useAddressInformationValidation from "../../validationHooks/useAddressInformationValidation";
import { AddressInformationValues } from "../../interfaces/useAddressInformationValidation";
type FormValues = PersonalInformationValues & AddressInformationValues;

export const RecruitmentForm = () => {
  // Used let so that I can change the value of values variable later on
  let { valuesPersonalInformation, validationPersonalInformation } =
    usePersonalInformationValidation();

  let { valuesAddresslInformation, validationAddressInformation } =
    useAddressInformationValidation();

  const combinedValidation = (values: FormValues) => {
    const errorsFromValidation = validationPersonalInformation(values);
    const errorsFromValidation2 = validationAddressInformation(values);

    return {
      ...errorsFromValidation,
      ...errorsFromValidation2,
    };
  };

  const formik = useFormik<FormValues>({
    initialValues: {
      ...valuesPersonalInformation,
      ...valuesAddresslInformation,
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
        {/* <AddressExtraInfo /> */}
        <button type="submit">Submit</button>
      </form>
    </Box>
  );
};

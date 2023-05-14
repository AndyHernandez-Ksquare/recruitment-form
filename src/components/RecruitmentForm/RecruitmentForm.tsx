import React from "react";
import { Box } from "@mui/material";
import { PersonalInformation } from "../PersonalInformation";
import { AddressInformation } from "../AddressInformation";
import { AddressExtraInfo } from "../AddressExtraInfo";
import { useFormik } from "formik";
import { PersonalInformationValues } from "../../interfaces/usePersonalInformation";
import PersonalInformationValidation from "../../validationHooks/usePersonalInformationValidation";

export const RecruitmentForm = () => {
  // Used let so that I can change the value of values variable later on
  let { validation, values } = PersonalInformationValidation();

  const formik = useFormik<PersonalInformationValues>({
    initialValues: values,
    validate: validation,
    onSubmit: (value) => {
      alert(JSON.stringify(value));
    },
  });

  values = formik.values; // Update values after formik initialization

  const { errors, touched, handleChange, handleBlur, handleSubmit } = formik;

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
        <button type="submit">Submit</button>
      </form>
      {/* <AddressInformation /> */}
      {/* <AddressExtraInfo /> */}
    </Box>
  );
};

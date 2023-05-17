import React from "react";
import { Box } from "@mui/material";
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

export const RecruitmentForm = () => {
  const { valuesForm, validationSchema } = useFormValuesAndValidation();

  const formik = useFormik<FormValues>({
    initialValues: valuesForm,
    // validate: combinedValidation,
    validationSchema: validationSchema,
    onSubmit: (value) => {
      alert(JSON.stringify(value));
    },
  });

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    formik;

  return (
    <Box>
      <form onSubmit={handleSubmit}>
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
        <GobernamentalInfo
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

        <BankAccountInfo
          errors={errors}
          touched={touched}
          values={values}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />

        <Skills
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

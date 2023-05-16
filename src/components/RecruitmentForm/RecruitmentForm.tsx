import React from "react";
import { Box } from "@mui/material";
import { PersonalInformation } from "../PersonalInformation";
import { AddressInformation } from "../AddressInformation";
import { AddressExtraInfo } from "../AddressExtraInfo";
import { useFormik } from "formik";
import { PersonalInformationValues } from "../../interfaces/PersonalInformation";
import usePersonalInformationValues from "../../validationHooks/usePersonalInformationValues";
import useAddressInformationValues from "../../validationHooks/useAddressInformationValues";
import { AddressInformationValues } from "../../interfaces/AddressInformation";
import { AddressExtraInfoValues } from "../../interfaces/AddressExtraInfo";
import useAddressExtraInfoValues from "../../validationHooks/useAddressExtraInfoValues";
import useExtraPersonalInfoValues from "../../validationHooks/useExtraPersonalInfoValues";
import { ExtraPersonalInfoValues } from "../../interfaces/ExtraPersonalInfo";
import { ExtraPersonalInfo } from "../ExtraPersonalInfo";
import * as Yup from "yup";
import { GobernamentalInfoValues } from "../../interfaces/GobernamentalInfo";
import { GobernamentalInfo } from "../GobernamentalInfo";
import { BankAccountInfoValues } from "../../interfaces/BankAccountInfo";
import useBankAccountInfoValues from "../../validationHooks/useBankAccountInfoValues";
import { BankAccountInfo } from "../BankAccountInfo";

// This type is important so that I can pass the same props to all components
type FormValues = PersonalInformationValues &
  AddressInformationValues &
  AddressExtraInfoValues &
  GobernamentalInfoValues &
  ExtraPersonalInfoValues &
  BankAccountInfoValues;

export const RecruitmentForm = () => {
  const { valuesPersonalInformation } = usePersonalInformationValues();

  const { valuesAddresslInformation } = useAddressInformationValues();

  const { valuesAddressExtraInfo } = useAddressExtraInfoValues();

  const { valuesExtraPersonalInfo } = useExtraPersonalInfoValues();

  const { valuesBankAccountInfo } = useBankAccountInfoValues();

  const validationSchema = Yup.object({
    // Personal Info
    name: Yup.string().required("Name is required"),
    paternal_last_name: Yup.string().required("Paternal last name is required"),
    gender: Yup.string().required("Gender is required"),
    city_birth: Yup.string().required("City of birth is required"),
    state_birth: Yup.string().required("State of birth is required"),
    country: Yup.string().required("Country is required"),

    // Address Info
    street: Yup.string().required("Street is required"),
    streetA: Yup.string().required("StreetA is required"),
    colony: Yup.string().required("Colony is required"),

    // Address extra info
    identificationCurp: Yup.string().matches(
      /^[A-Z0-9]{18}$/,
      "This is not a valid CURP document"
    ),
    identificationPassport: Yup.string().matches(
      /^[A-Z0-9]{6,9}$/,
      "This is not a valid passport document"
    ),

    // Extra personal info
    email: Yup.string().email("This is not an email"),
    altEmail: Yup.string().email("This is not an email"),
    phone: Yup.string().matches(/^\d{1,2} \d{10}$/, "Invalid phone number"),

    // Bank account info
    accountNumber: Yup.string().matches(
      /^[A-Z0-9]+$/,
      "This is not a valid account number"
    ),

    CLABE: Yup.string().matches(/^\d{18}$/, "This is not a valid CLABE"),
  });

  const formik = useFormik<FormValues>({
    initialValues: {
      ...valuesPersonalInformation,
      ...valuesAddresslInformation,
      ...valuesAddressExtraInfo,
      ...valuesExtraPersonalInfo,
      ...valuesBankAccountInfo,
    },
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

        <button type="submit">Submit</button>
      </form>
    </Box>
  );
};

import React from "react";
import { Box } from "@mui/material";
import { PersonalInformation } from "../PersonalInformation";
import { AddressInformation } from "../AddressInformation";
import { AddressExtraInfo } from "../AddressExtraInfo";
import { useFormik } from "formik";
import { PersonalInformationValues } from "../../interfaces/PersonalInformation";
import usePersonalInformationValidation from "../../validationHooks/usePersonalInformationValues";
import useAddressInformationValidation from "../../validationHooks/useAddressInformationValues";
import { AddressInformationValues } from "../../interfaces/AddressInformation";
import { AddressExtraInfoValues } from "../../interfaces/AddressExtraInfo";
import useAddressExtraInfoValidation from "../../validationHooks/useAddressExtraInfoValidation";
import useExtraPersonalInfoValidation from "../../validationHooks/useExtraPersonalInfoValidation";
import { ExtraPersonalInfoValues } from "../../interfaces/ExtraPersonalInfo";
import { ExtraPersonalInfo } from "../ExtraPersonalInfo";
import * as Yup from "yup";

// This type is important so that I can pass the same props to all components
type FormValues = PersonalInformationValues &
  AddressInformationValues &
  AddressExtraInfoValues &
  ExtraPersonalInfoValues;

export const RecruitmentForm = () => {
  const { valuesPersonalInformation } = usePersonalInformationValidation();

  const { valuesAddresslInformation } = useAddressInformationValidation();

  const { valuesAddressExtraInfo } = useAddressExtraInfoValidation();

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

    identification: Yup.string().required("Identification is required"),
  });

  // const { valuesExtraPersonalInfo, validationExtraPersonalInfo } =
  //   useExtraPersonalInfoValidation();

  // const combinedValidation = (values: FormValues) => {
  //   const errorsFromPersonalInformationValidation =
  //     validationPersonalInformation(values);
  //   const errorsFromAddressInformationValidation =
  //     validationAddressInformation(values);
  //   const errorsFromAddressExtraInfoValidation =
  //     validationAddressExtraInfo(values);
  //   const errorsFromExtraPersonalInfo = validationExtraPersonalInfo(values);

  //   return {
  //     ...errorsFromPersonalInformationValidation,
  //     ...errorsFromAddressInformationValidation,
  //     ...errorsFromAddressExtraInfoValidation,
  //     ...errorsFromExtraPersonalInfo,
  //   };
  // };

  const formik = useFormik<
    PersonalInformationValues &
      AddressInformationValues &
      AddressExtraInfoValues
  >({
    initialValues: {
      ...valuesPersonalInformation,
      ...valuesAddresslInformation,
      ...valuesAddressExtraInfo,
      // ...valuesExtraPersonalInfo,
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
        {/* <ExtraPersonalInfo
          errors={errors}
          touched={touched}
          values={values}
          handleChange={handleChange}
          handleBlur={handleBlur}
        /> */}
        <button type="submit">Submit</button>
      </form>
    </Box>
  );
};

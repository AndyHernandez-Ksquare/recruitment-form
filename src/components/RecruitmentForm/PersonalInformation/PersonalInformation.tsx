import React from "react";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useFormik } from "formik";
type Props = {};

export type PersonalInformationValues = {
  name: string;
  paternal_last_name: string;
  maternal_last_name: string;
  gender: string;
  preferred_gender: string;
};

const validateField = (
  fieldName: keyof PersonalInformationValues,
  values: PersonalInformationValues
) => {
  const errors: Partial<PersonalInformationValues> = {};
  if (!values[fieldName]) {
    errors[fieldName] = "Required";
  }
  return errors;
};

const validation = (values: PersonalInformationValues) => {
  let errors: Partial<PersonalInformationValues> = {};
  Object.keys(values).forEach((field) => {
    const fieldName = field as keyof PersonalInformationValues;
    const fieldErrors = validateField(fieldName, values);
    errors = { ...errors, ...fieldErrors };
  });
  return errors;
};

export const PersonalInformation = (props: Props) => {
  const formik = useFormik<PersonalInformationValues>({
    initialValues: {
      name: "",
      paternal_last_name: "",
      maternal_last_name: "",
      gender: "",
      preferred_gender: "",
    },
    validate: validation,
    onSubmit: (value) => {
      console.log();
    },
  });

  const { errors, touched, values, handleChange, handleBlur, handleSubmit } =
    formik;

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
      {/* Name */}
      <TextField
        required
        id="name"
        name="name"
        label="Name"
        value={values.name}
        onBlur={handleBlur}
        onChange={handleChange}
        error={touched.name && Boolean(errors.name)}
        helperText={touched.name && errors.name}
      />
      {/* Paternal Last Name */}
      <TextField
        required
        id="paternal_last_name"
        name="paternal_last_name"
        label="Paternal Last Name"
        value={values.paternal_last_name}
        onBlur={handleBlur}
        onChange={handleChange}
        error={touched.paternal_last_name && Boolean(errors.paternal_last_name)}
        helperText={touched.paternal_last_name && errors.paternal_last_name}
      />
      {/* Maternal Last Name */}
      <TextField
        id="maternal_last_name"
        name="maternal_last_name"
        label="Maternal Last Name"
        value={values.maternal_last_name}
        onChange={handleChange}
      />

      {/* Gender */}
      <FormControl fullWidth>
        <InputLabel id="gender_label">Gender</InputLabel>
        <Select
          required
          labelId="gender_label"
          id="gender_select"
          name="gender"
          value={values.gender}
          label="Gender"
          onBlur={handleBlur}
          onChange={handleChange}
          error={touched.gender && Boolean(errors.gender)}
        >
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
          <MenuItem value="Rather not to say">Rather not to say</MenuItem>
        </Select>
      </FormControl>

      {/* Preferred Gender */}
      {values.gender === "Other" && (
        <TextField
          id="preferred_gender"
          name="preferred_gender"
          label="Preferred Gender"
          value={values.preferred_gender}
          onBlur={handleBlur}
          onChange={handleChange}
          error={touched.preferred_gender && Boolean(errors.preferred_gender)}
          helperText={touched.preferred_gender && errors.preferred_gender}
        />
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

import React, { useEffect } from "react";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useFormik } from "formik";
type Props = {};

type PersonalInformationValues = {
  name: string;
  paternal_last_name: string;
  maternal_last_name: string;
  gender: string;
  preferred_gender: string;
  city: string;
  state: string;
  country: string;
};

const validation = (values: PersonalInformationValues) => {
  const errors: Partial<PersonalInformationValues> = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.paternal_last_name) {
    errors.paternal_last_name = "Required";
  }
  if (!values.gender) {
    errors.gender = "Required";
  }

  if (!values.city) {
    errors.city = "Required";
  }

  if (!values.state) {
    errors.state = "Required";
  }
  if (!values.country) {
    errors.country = "Required";
  }

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
      city: "",
      state: "",
      country: "",
    },
    validate: validation,
    onSubmit: (value) => {
      alert(JSON.stringify(value));
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
      {/* Date of birth */}

      {/* Place of birth */}

      <FormControl fullWidth>
        <Typography variant="h5">Place of birth</Typography>
        <TextField
          required
          id="city"
          name="city"
          label="City"
          value={values.city}
          onBlur={handleBlur}
          onChange={handleChange}
          error={touched.city && Boolean(errors.city)}
          helperText={touched.city && errors.city}
        />
        <TextField
          required
          id="state"
          name="state"
          label="state"
          value={values.state}
          onBlur={handleBlur}
          onChange={handleChange}
          error={touched.state && Boolean(errors.state)}
          helperText={touched.state && errors.state}
        />
        <TextField
          required
          id="country"
          name="country"
          label="country"
          value={values.country}
          onBlur={handleBlur}
          onChange={handleChange}
          error={touched.country && Boolean(errors.country)}
          helperText={touched.country && errors.country}
        />
      </FormControl>

      <button type="submit">Submit</button>
    </form>
  );
};

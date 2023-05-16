import React, { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { PersonalInformationProps } from "../../interfaces/PersonalInformation";
import dayjs, { Dayjs } from "dayjs";

export const PersonalInformation = ({
  errors,
  touched,
  values,
  handleChange,
  handleBlur,
}: PersonalInformationProps) => {
  return (
    <form style={{ marginTop: "1rem" }}>
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
          <MenuItem value="Rather_not_to_say">Rather not to say</MenuItem>
        </Select>
      </FormControl>

      {/* Preferred Gender */}
      {values.gender === "Other" && (
        <TextField
          id="preferred_gender"
          name="preferred_gender"
          label="Preferred Gender"
          value={values.preferred_gender}
          onChange={handleChange}
        />
      )}
      {/* Date of birth */}
      {/* Create a wrapper to pass the the handleChange, do not pass it directly
      I will need to adapt the format of the value to the format formk is waiting in the handleChange handler*/}
      <DatePicker
        // defaultValue={dayjs("2022-04-17")}
        label="Date of birth"
        value={values.date_of_birth}
        // onChange={(newValue) => {
        //   setUseState(newValue);
        //   console.log(useStates);
        // }}
        onChange={handleChange}
      />

      {/* Place of birth */}

      <FormControl fullWidth>
        <Typography variant="h5">Place of birth</Typography>
        <TextField
          required
          id="city_birth"
          name="city_birth"
          label="City"
          value={values.city_birth}
          onBlur={handleBlur}
          onChange={handleChange}
          error={touched.city_birth && Boolean(errors.city_birth)}
          helperText={touched.city_birth && errors.city_birth}
        />
        <TextField
          required
          id="state_birth"
          name="state_birth"
          label="State"
          value={values.state_birth}
          onBlur={handleBlur}
          onChange={handleChange}
          error={touched.state_birth && Boolean(errors.state_birth)}
          helperText={touched.state_birth && errors.state_birth}
        />
        <TextField
          required
          id="country"
          name="country"
          label="Country"
          value={values.country}
          onBlur={handleBlur}
          onChange={handleChange}
          error={touched.country && Boolean(errors.country)}
          helperText={touched.country && errors.country}
        />
      </FormControl>
    </form>
  );
};

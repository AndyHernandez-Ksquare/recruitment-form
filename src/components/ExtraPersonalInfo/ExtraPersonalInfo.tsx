import React from "react";
import { ExtraPersonalInfoProps } from "../../interfaces/ExtraPersonalInfo";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

export const ExtraPersonalInfo = ({
  errors,
  touched,
  values,
  handleChange,
  handleBlur,
}: ExtraPersonalInfoProps) => {
  return (
    <form>
      <TextField
        label="Phone number"
        type="tel"
        id="phone"
        name="phone"
        value={values.phone}
        onBlur={handleBlur}
        onChange={handleChange}
        error={touched.phone && Boolean(errors.phone)}
        helperText={touched.phone && errors.phone}
        // placeholder="Ex: ext-832-432-2366"
      />
      <TextField
        label="Email"
        type="email"
        id="email"
        name="email"
        value={values.email}
        onBlur={handleBlur}
        onChange={handleChange}
        error={touched.email && Boolean(errors.email)}
        helperText={touched.email && errors.email}
      />

      <TextField
        label="Alt Email"
        type="altEmail"
        id="altEmail"
        name="altEmail"
        value={values.altEmail}
        onBlur={handleBlur}
        onChange={handleChange}
        error={touched.altEmail && Boolean(errors.altEmail)}
        helperText={touched.altEmail && errors.altEmail}
      />
      <FormControl fullWidth>
        <InputLabel id="howDiscoveredUs_label">
          How did you find about us?
        </InputLabel>
        <Select
          labelId="howDiscoveredUs_label"
          id="howDiscoveredUs_select"
          name="howDiscoveredUs"
          value={values.howDiscoveredUs}
          label="How did you find about us?"
          onBlur={handleBlur}
          onChange={handleChange}
        >
          <MenuItem value="Recommendation">Recommendation</MenuItem>
          <MenuItem value="Facebook">Facebook</MenuItem>
          <MenuItem value="Instagram">Instagram</MenuItem>
          <MenuItem value="My university">My university</MenuItem>
          <MenuItem value="Google">Google</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Select>
        {values.howDiscoveredUs === "Other" && (
          <TextField
            id="howDiscoveredUsOther"
            name="howDiscoveredUsOther"
            label="Describe how you found us"
            value={values.howDiscoveredUsOther}
            onChange={handleChange}
          ></TextField>
        )}
      </FormControl>
    </form>
  );
};

import React from "react";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
} from "@mui/material";
import { AddressExtraInfoProps } from "../../interfaces/AddressExtraInfo";

export const AddressExtraInfo = ({
  errors,
  touched,
  values,
  handleChange,
  handleBlur,
}: AddressExtraInfoProps) => {
  return (
    <Box
      sx={{
        width: 300,
        marginTop: -20,
        display: "flex",
        gap: 1,
        flexDirection: "column",
      }}
    >
      {/* Type of residency */}
      <FormControl fullWidth sx={{ display: "flex", gap: 1 }}>
        <InputLabel id="residency_label">Residency type</InputLabel>
        <Select
          required
          labelId="residency_label"
          id="residency_select"
          name="residencyType"
          value={values.residencyType}
          label="Type of Residency"
          onBlur={handleBlur}
          onChange={handleChange}
          error={touched.residencyType && Boolean(errors.residencyType)}
        >
          <MenuItem value="Rented">Rented</MenuItem>
          <MenuItem value="Owned">Owned</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Select>

        {/* Preferred Gender */}
        {values.residencyType === "Other" && (
          <TextField
            id="residencyTypeOther"
            name="residencyTypeOther"
            label="Enter your residency type"
            value={values.residencyTypeOther}
            onBlur={handleBlur}
            onChange={handleChange}
            error={
              touched.residencyTypeOther && Boolean(errors.residencyTypeOther)
            }
            helperText={touched.residencyTypeOther && errors.residencyTypeOther}
          />
        )}
      </FormControl>

      {/* Amount of people */}
      <FormControl fullWidth>
        <InputLabel id="amount_people_label">People in your house</InputLabel>
        <Select
          required
          labelId="amount_people_label"
          id="amount_people_select"
          name="peopleInHouse"
          value={values.peopleInHouse}
          label="People living in your house"
          onBlur={handleBlur}
          onChange={handleChange}
          error={touched.peopleInHouse && Boolean(errors.peopleInHouse)}
        >
          <MenuItem value="live_alone">I live alone</MenuItem>
          <MenuItem value="live_with_parents">I live with my parents</MenuItem>
          <MenuItem value="live_couple">
            I live with my significant other
          </MenuItem>
          <MenuItem value="live_couple_kids">
            I live with my significant other and kids
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

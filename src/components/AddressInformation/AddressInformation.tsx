import {
  Typography,
  TextField,
  FormControl,
  Button,
  Input,
} from "@mui/material";
import React from "react";
import { AddressInformationProps } from "../../interfaces/AddressInformationValidation";

export const AddressInformation = ({
  errors,
  touched,
  values,
  handleChange,
  handleBlur,
}: AddressInformationProps) => {
  return (
    <form>
      <Typography variant="subtitle1">
        Please provide your current address as we're going to deliver important
        documents later in the process
      </Typography>

      <FormControl>
        {/* Streets */}
        <TextField
          required
          id="street"
          name="street"
          label="Street"
          value={values.street}
          onBlur={handleBlur}
          onChange={handleChange}
          error={touched.street && Boolean(errors.street)}
          helperText={touched.street && errors.street}
        />

        <TextField
          required
          id="streetA"
          name="streetA"
          label="In between street A"
          value={values.streetA}
          onBlur={handleBlur}
          onChange={handleChange}
          error={touched.streetA && Boolean(errors.streetA)}
          helperText={touched.streetA && errors.streetA}
        />

        <TextField
          id="streetB"
          name="streetB"
          label="In between street B"
          value={values.streetB}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl>
        <TextField
          required
          id="colony"
          name="colony"
          label="Colony"
          value={values.colony}
          onBlur={handleBlur}
          onChange={handleChange}
          error={touched.colony && Boolean(errors.colony)}
          helperText={touched.colony && errors.colony}
        />
        <TextField
          id="city_current"
          name="city_current"
          label="City"
          value={values.city_current}
          onChange={handleChange}
        />
        <TextField
          id="state_current"
          name="state_current"
          label="State"
          value={values.state_current}
          onChange={handleChange}
        />
        <TextField
          id="postalCode"
          name="postalCode"
          label="Postal code"
          value={values.postalCode}
          onChange={handleChange}
        />
        <Input
          type="file"
          id="upload"
          name="file"
          style={{ display: "none" }}
          value={values.file}
          onChange={handleChange}
          error={touched.file && Boolean(errors.file)}
        />

        <label htmlFor="upload">
          <Button
            sx={{ backgroundColor: errors.file && "red" }}
            variant="contained"
            component="span"
          >
            {errors.file
              ? "Must be pdf, jpg or png"
              : "Upload Proof of Address"}
          </Button>
        </label>
      </FormControl>
    </form>
  );
};

import {
  Typography,
  TextField,
  FormControl,
  Button,
  Input,
} from "@mui/material";
import React from "react";
import { useFormik } from "formik";

type AddressInformationType = {
  street: string;
  streetA: string;
  streetB: string;
  colony: string;
  city: string;
  state: string;
  postalCode: string;
  file: string;
};

const getFileExtension = (file: string) => {
  // Get the last index of the dot (.) character
  const dotIndex = file.lastIndexOf(".");

  // Extract the extension from the file name
  if (dotIndex !== -1) {
    const extension = file.slice(dotIndex + 1).toLowerCase();
    return extension;
  }

  return "";
};

const validation = (values: AddressInformationType) => {
  const errors: Partial<AddressInformationType> = {};
  if (!values.street) {
    errors.street = "Required";
  }
  if (!values.streetA) {
    errors.streetA = "Required";
  }
  if (!values.colony) {
    errors.colony = "Required";
  }
  const fileExtension = getFileExtension(values.file);
  if (!["pdf", "jpg", "png"].includes(fileExtension)) {
    errors.file = "Invalid file type. Please upload a PDF, JPG, or PNG file.";
  }
  return errors;
};

export const AddressInformation = () => {
  const formik = useFormik<AddressInformationType>({
    initialValues: {
      street: "",
      streetA: "",
      streetB: "",
      colony: "",
      city: "",
      state: "",
      postalCode: "",
      file: "",
    },
    validate: validation,
    onSubmit: (value) => {
      console.log(JSON.stringify(value));
    },
  });

  const { errors, touched, values, handleChange, handleBlur, handleSubmit } =
    formik;

  console.log(errors);

  return (
    <form onSubmit={handleSubmit}>
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
          id="city"
          name="city"
          label="City"
          value={values.city}
          onChange={handleChange}
        />
        <TextField
          id="state"
          name="state"
          label="State"
          value={values.state}
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
          onBlur={handleBlur}
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

      <button type="submit">Submit</button>
    </form>
  );
};

import React, { ChangeEvent } from "react";
import {
  TextField,
  FormControl,
  Button,
  Box,
  Input,
  InputLabel,
} from "@mui/material";

import { GobernamentalInfoProps } from "../../interfaces/GobernamentalInfo";
export const GobernamentalInfo = ({
  errors,
  touched,
  values,
  handleChange,
  handleBlur,
  setFieldValue,
  setFieldTouched,
}: GobernamentalInfoProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        marginTop: -20,
      }}
    >
      {values.country.toLowerCase() === "mexico" ? (
        <TextField
          id="identificationCurp"
          name="identificationCurp"
          label="CURP"
          value={values.identificationCurp}
          onChange={handleChange}
          onBlur={handleBlur}
          error={
            touched.identificationCurp && Boolean(errors.identificationCurp)
          }
          helperText={touched.identificationCurp && errors.identificationCurp}
        />
      ) : (
        <TextField
          id="identificationPassport"
          name="identificationPassport"
          label="Passport"
          value={values.identificationPassport}
          onChange={handleChange}
          onBlur={handleBlur}
          error={
            touched.identificationPassport &&
            Boolean(errors.identificationPassport)
          }
          helperText={
            touched.identificationPassport && errors.identificationPassport
          }
        />
      )}
      <FormControl>
        <Input
          type="file"
          name="identificationProof"
          id="identificationProof"
          style={{ display: "none" }}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setFieldTouched("identificationProof", true);
            setFieldValue(
              "identificationProof",
              event.currentTarget.files![0].name
            );
          }}
          error={
            touched.identificationProof && Boolean(errors.identificationProof)
          }
        />
      </FormControl>
      <InputLabel htmlFor="identificationProof">
        <Button
          sx={{
            backgroundColor:
              touched.identificationProof && errors.identificationProof
                ? "red"
                : "none",
          }}
          variant="contained"
          component="span"
        >
          {touched.identificationProof && errors.identificationProof
            ? errors.identificationProof
            : values.identificationProof
            ? "File uploaded!"
            : "Upload Proof of Identification"}
        </Button>
      </InputLabel>
    </Box>
  );
};

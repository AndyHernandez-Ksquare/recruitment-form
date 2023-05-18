import React from "react";
import { TextField, FormControl, Button, Box } from "@mui/material";
import { GobernamentalInfoProps } from "../../interfaces/GobernamentalInfo";
export const GobernamentalInfo = ({
  errors,
  touched,
  values,
  handleChange,
  handleBlur,
}: GobernamentalInfoProps) => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: 2, marginTop: -30 }}
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

      <FormControl sx={{}}>
        <input
          type="file"
          accept="application/pdf,image/jpeg,image/jpg,image/png"
          id="identificationProof"
          name="identificationProof"
          style={{ display: "none" }}
          value={values.identificationProof}
          onChange={handleChange}
        />

        <label htmlFor="identificationProof">
          <Button
            sx={{ backgroundColor: errors.identificationProof && "red" }}
            variant="contained"
            component="span"
          >
            {errors.identificationProof
              ? "Must be pdf, jpg, or png"
              : values.identificationProof
              ? "File uploaded!"
              : "Upload Proof of Identification"}
          </Button>
        </label>
      </FormControl>
    </Box>
  );
};

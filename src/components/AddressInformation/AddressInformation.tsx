import {
  Typography,
  TextField,
  FormControl,
  Button,
  InputLabel,
  Box,
  Input,
} from "@mui/material";
import React, { ChangeEvent } from "react";
import { AddressInformationProps } from "../../interfaces/AddressInformation";
export const AddressInformation = ({
  errors,
  touched,
  values,
  handleChange,
  handleBlur,
  setFieldValue,
  setFieldTouched,
}: AddressInformationProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h6">
        Please provide your current address as we're going to deliver important
        documents later in the process
      </Typography>

      <FormControl
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: 10,
          marginTop: 5,
        }}
      >
        {/* Streets */}
        <FormControl sx={{ displlay: "flex", gap: 1 }}>
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
        <FormControl sx={{ displlay: "flex", gap: 1 }}>
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
            name="addressProof"
            id="addressProof"
            style={{ display: "none" }}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setFieldTouched("addressProof", true);
              setFieldValue("addressProof", event.currentTarget.files![0].name);
            }}
            error={touched.addressProof && Boolean(errors.addressProof)}
          />
        </FormControl>
      </FormControl>
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 4 }}>
        <InputLabel htmlFor="addressProof">
          <Button
            variant="contained"
            component="span"
            sx={{
              backgroundColor:
                touched.addressProof && errors.addressProof ? "red" : "none",
            }}
          >
            {touched.addressProof && errors.addressProof
              ? errors.addressProof
              : values.addressProof
              ? "File uploaded!"
              : "Upload Proof of Address"}
          </Button>
        </InputLabel>
      </Box>
    </Box>
  );
};

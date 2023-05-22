import React from "react";
import { BankAccountInfoProps } from "../../interfaces/BankAccountInfo";
import { Box, TextField } from "@mui/material";


export const BankAccountInfo = ({
  errors,
  touched,
  values,
  handleChange,
  handleBlur,
}: BankAccountInfoProps) => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: 1, marginTop: -30 }}
    >

      <TextField
        id="accountNumber"
        name="accountNumber"
        label="Account number"
        value={values.accountNumber}
        onBlur={handleBlur}
        onChange={handleChange}
        error={touched.accountNumber && Boolean(errors.accountNumber)}
        helperText={touched.accountNumber && errors.accountNumber}
      />

      <TextField
        id="CLABE"
        name="CLABE"
        label="CLABE"
        value={values.CLABE}
        onBlur={handleBlur}
        onChange={handleChange}
        error={touched.CLABE && Boolean(errors.CLABE)}
        helperText={touched.CLABE && errors.CLABE}
      />

      <TextField
        id="bank"
        name="bank"
        label="Bank"
        value={values.bank}
        onChange={handleChange}
      />
    </Box>

  );
};

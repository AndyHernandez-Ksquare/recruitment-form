import React from "react";
import { Box } from "@mui/material";
import { PersonalInformation } from "../PersonalInformation";
import { AddressInformation } from "../AddressInformation";

type Props = {};

export const RecruitmentForm = (props: Props) => {
  return (
    <Box>
      <PersonalInformation />
      <AddressInformation />
    </Box>
  );
};

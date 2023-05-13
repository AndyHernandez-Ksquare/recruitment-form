import React from "react";
import { Box } from "@mui/material";
import { PersonalInformation } from "./PersonalInformation/PersonalInformation";

type Props = {};

export const RecruitmentForm = (props: Props) => {
  return (
    <Box>
      <PersonalInformation />
    </Box>
  );
};

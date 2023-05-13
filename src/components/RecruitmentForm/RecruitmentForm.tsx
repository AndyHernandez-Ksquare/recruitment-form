import React from "react";
import { Box } from "@mui/material";
import { PersonalInformation } from "../PersonalInformation";
import { AddressInformation } from "../AddressInformation";
import { AddressExtraInfo } from "../AddressExtraInfo";

type Props = {};

export const RecruitmentForm = (props: Props) => {
  return (
    <Box>
      <form action="">
        {" "}
        <PersonalInformation />
      </form>
      {/* <AddressInformation /> */}
      <AddressExtraInfo />
    </Box>
  );
};

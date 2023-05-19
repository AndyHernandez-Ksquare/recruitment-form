import React from "react";
import { Meta, Story } from "@storybook/react";
import { GobernamentalInfoProps } from "../../interfaces/GobernamentalInfo";
import { GobernamentalInfo } from "./index";

export default {
  title: "Form/Gobernamental Info",
  component: GobernamentalInfo,
  args: {
    errors: {},
    touched: {},
    values: {
      country: "Mexico",
      identificationCurp: "GOMA920521HMCLRS09",
      identificationPassport: "A12345678",
      identificationProof: null,
    },
    handleChange: () => {},
    handleBlur: () => {},
  },
} as Meta;

const GobernamentalInfoTemplate: Story<GobernamentalInfoProps> = (args) => (
  <div style={{ marginTop: 200 }}>
    <GobernamentalInfo {...args} />
  </div>
);

export const Default = GobernamentalInfoTemplate.bind({});

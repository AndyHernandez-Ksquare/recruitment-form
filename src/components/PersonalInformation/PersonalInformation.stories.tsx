import { Meta, Story } from "@storybook/react";
import React from "react";
import { PersonalInformation } from "./index";
import { PersonalInformationProps } from "../../interfaces/PersonalInformation";
import dayjs from "dayjs";

export default {
  title: "Form/ Personal information",
  component: PersonalInformation,
  args: {
    errors: {},
    touched: {},
    values: {
      name: "Andy",
      paternal_last_name: "Hernandez",
      maternal_last_name: "Gonzalez",
      gender: "Other",
      preferred_gender: "Male",
      date_of_birth: dayjs("2002/08/05"),
      city_birth: "Santo Domingo",
      state_birth: "Santo Domingo",
      country: "Dominican Republic",
    },
    handleChange: () => {},
    handleBlur: () => {},
    setFieldValue: () => {},
  },
} as Meta;

const PersonalInformationTemplate: Story<PersonalInformationProps> = (args) => (
  <div style={{ maxWidth: "50vw" }}>
    <PersonalInformation {...args} />
  </div>
);

export const Default = PersonalInformationTemplate.bind({});

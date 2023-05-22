import React from "react";
import { Meta, Story } from "@storybook/react";
import { ExtraPersonalInfoProps } from "../../interfaces/ExtraPersonalInfo";
import { ExtraPersonalInfo } from "./index";

export default {
  title: "Form/Extra Personal Info",
  component: ExtraPersonalInfo,
  args: {
    errors: {},
    touched: {},
    values: {
      phone: "1 234567890",
      email: "example@example.com",
      altEmail: "alternate@example.com",
      howDiscoveredUs: "Other",
      howDiscoveredUsOther: "Youtube",
      mostLikeSD:
        "I love solving complex problems and building innovative solutions.",
      highestDegree: "University_degree",
      highestDegreeOther: "",
      universityName: "University of Technology",
      universityCity: "Cityville",
      universityState: "Stateville",
      universityCountry: "Countryland",
      nameOfDegree: "Bachelor of Science in Computer Science",
      finishedDegree: "yes",
      proofOfDegree: null,
      proffesionalLicense: "yes",
      proofOfLicense: null,
      scholarship: "yes",
      scholarshipLevel: "University",
      scholarshipKind: "Academics",
      scholarshipDuration: 4,
    },
    handleChange: () => {},
    handleBlur: () => {},
  },
} as Meta;

const ExtraPersonalInfoTemplate: Story<ExtraPersonalInfoProps> = (args) => (
  <ExtraPersonalInfo {...args} />
);

export const Default = ExtraPersonalInfoTemplate.bind({});

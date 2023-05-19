import React from "react";
import { Meta, Story } from "@storybook/react";
import { RecruitmentForm } from "./index";

export default {
  title: "Form/Recruitment Form",
  component: RecruitmentForm,
} as Meta;

const RecruitmentFormTemplate: Story = () => {
  return <RecruitmentForm />;
};

export const Default = RecruitmentFormTemplate.bind({});

import React from "react";
import { Meta, Story } from "@storybook/react";
import { SkillsProps } from "../../interfaces/Skills";
import { Skills } from "./index";

export default {
  title: "Form/Skills",
  component: Skills,
  args: {
    errors: {},
    touched: {},
    values: {
      knowProgrammingLanguage: "Javascript. Python, C",
      amountOfExperience: "More_than_12_months",
      //   disabilities: "",
    },
    handleChange: () => {},
    handleBlur: () => {},
  },
} as Meta;

const SkillsTemplate: Story<SkillsProps> = (args) => (
  <div style={{ marginTop: 300 }}>
    <Skills {...args} />
  </div>
);

export const Default = SkillsTemplate.bind({});

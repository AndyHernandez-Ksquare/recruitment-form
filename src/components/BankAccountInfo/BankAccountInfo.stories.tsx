import React from "react";
import { Meta, Story } from "@storybook/react";
import { BankAccountInfo } from "./index";
import { BankAccountInfoProps } from "../../interfaces/BankAccountInfo";
export default {
  component: BankAccountInfo,
  title: "Form/BankAccountInfo",
} as Meta;

const Template: Story<BankAccountInfoProps> = (args) => (
  <div style={{ marginTop: 300 }}>
    <BankAccountInfo {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  errors: {},
  touched: {},
  values: {
    accountNumber: "1234567890",
    CLABE: "014380580495294875",
    bank: "Example Bank",
  },
  handleChange: () => {},
  handleBlur: () => {},
};

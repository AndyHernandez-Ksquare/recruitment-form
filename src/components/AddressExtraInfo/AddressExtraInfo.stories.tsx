import React from "react";
import { Meta, Story } from "@storybook/react";
import { AddressExtraInfoProps } from "../../interfaces/AddressExtraInfo";
import { AddressExtraInfo } from "./index";

export default {
  title: "Form/Address Extra Info",
  component: AddressExtraInfo,
  args: {
    errors: {},
    touched: {},
    values: {
      residencyType: "Other",
      residencyTypeOther: "Shared",
    },
    handleChange: () => {},
    handleBlur: () => {},
  },
} as Meta;

const AddressExtraInfoTemplate: Story<AddressExtraInfoProps> = (args) => (
  <div style={{ marginTop: 200 }}>
    <AddressExtraInfo {...args} />
  </div>
);

export const Default = AddressExtraInfoTemplate.bind({});

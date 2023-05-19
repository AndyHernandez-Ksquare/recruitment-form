import { Meta, Story } from "@storybook/react";
import React from "react";
import { AddressInformation } from "./index";
import { AddressInformationProps } from "../../interfaces/AddressInformation";

export default {
  title: "Form/ Address Information",
  component: AddressInformation,
  args: {
    errors: {},
    touched: {},
    values: {
      street: "123 Main Street",
      streetA: "456 Elm Avenue",
      streetB: "789 Oak Lane",
      colony: "Greenwood Colony",
      city_current: "New York City",
      state_current: "New York",
      postalCode: "10001",
      addressProof: "",
    },
    activeStep: 0,
    handleChange: () => {},
    handleBlur: () => {},
    setFieldValue: () => {},
  },
} as Meta;

const AddressInformationTemplate: Story<AddressInformationProps> = (args) => (
  <div>
    <AddressInformation {...args} />
  </div>
);

export const Default = AddressInformationTemplate.bind({});

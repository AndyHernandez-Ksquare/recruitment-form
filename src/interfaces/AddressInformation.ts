import { FormikErrors, FormikTouched } from "formik";
import { FormValues } from "./Form";

export type AddressInformationValues = {
  street: string;
  streetA: string;
  streetB?: string;
  colony: string;
  city_current?: string;
  state_current?: string;
  postalCode?: string;
  addressProof: string;
};

export interface AddressInformationProps {
  errors: FormikErrors<AddressInformationValues>;
  touched: FormikTouched<AddressInformationValues>;
  values: AddressInformationValues;
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T_1 = string | React.ChangeEvent<any>>(field: T_1): T_1;
  };
  handleBlur: {
    (e: React.FocusEvent<any, Element>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
  activeStep: number;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<FormValues>>;
}

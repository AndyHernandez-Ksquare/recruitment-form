import { FormikErrors, FormikTouched } from "formik";

export type AddressInformationValues = {
  street: string;
  streetA: string;
  streetB: string;
  colony: string;
  city: string;
  state: string;
  postalCode: string;
  file: string;
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
}

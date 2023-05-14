import { FormikErrors, FormikTouched } from "formik";

export interface AddressExtraInfoValues {
  residencyType: string;
  residencyTypeOther: string;
  peopleInHouse: string;
}

export interface AddressExtraInfoProps {
  errors: FormikErrors<AddressExtraInfoValues>;
  touched: FormikTouched<AddressExtraInfoValues>;
  values: AddressExtraInfoValues;
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T_1 = string | React.ChangeEvent<any>>(field: T_1): T_1;
  };
  handleBlur: {
    (e: React.FocusEvent<any, Element>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
}

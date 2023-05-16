import { FormikErrors, FormikTouched } from "formik";

export interface BankAccountInfoValues {
  accountNumber: string;
  CLABE: string;
  bank: string;
}

export interface BankAccountInfoProps {
  errors: FormikErrors<BankAccountInfoValues>;
  touched: FormikTouched<BankAccountInfoValues>;
  values: BankAccountInfoValues;
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T_1 = string | React.ChangeEvent<any>>(field: T_1): T_1;
  };
  handleBlur: {
    (e: React.FocusEvent<any, Element>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
}

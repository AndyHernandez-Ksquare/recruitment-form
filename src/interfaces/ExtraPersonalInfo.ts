import { FormikErrors, FormikTouched } from "formik";

export interface ExtraPersonalInfoValues {
  phone: string;
  email: string;
  altEmail: string;
  howDiscoveredUs: string;
  howDiscoveredUsOther?: string;
}

export interface ExtraPersonalInfoProps {
  errors: FormikErrors<ExtraPersonalInfoValues>;
  touched: FormikTouched<ExtraPersonalInfoValues>;
  values: ExtraPersonalInfoValues;
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T_1 = string | React.ChangeEvent<any>>(field: T_1): T_1;
  };
  handleBlur: {
    (e: React.FocusEvent<any, Element>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
}

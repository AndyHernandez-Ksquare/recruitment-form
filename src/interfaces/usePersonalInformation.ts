import { FormikErrors, FormikTouched } from "formik";

export interface PersonalInformationValues {
  name: string;
  paternal_last_name: string;
  maternal_last_name: string;
  gender: string;
  preferred_gender: string;
  city: string;
  state: string;
  country: string;
}

export interface PersonalInformationProps {
  errors: FormikErrors<PersonalInformationValues>;
  touched: FormikTouched<PersonalInformationValues>;
  values: PersonalInformationValues;
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T_1 = string | React.ChangeEvent<any>>(field: T_1): T_1;
  };
  handleBlur: {
    (e: React.FocusEvent<any, Element>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
}

import { FormikErrors, FormikTouched } from "formik";
import { PersonalInformationValues } from "./PersonalInformation";
export interface GobernamentalInfoValues {
  identificationPassport: string;
  identificationCurp: string;
  identificationProof: string;
}

export interface GobernamentalInfoProps {
  errors: FormikErrors<GobernamentalInfoValues>;
  touched: FormikTouched<GobernamentalInfoValues>;
  values: PersonalInformationValues & GobernamentalInfoValues;
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T_1 = string | React.ChangeEvent<any>>(field: T_1): T_1;
  };
  handleBlur: {
    (e: React.FocusEvent<any, Element>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<GobernamentalInfoValues>>;
  setFieldTouched: (
    field: string,
    touched?: boolean | undefined,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<GobernamentalInfoValues>>;
}

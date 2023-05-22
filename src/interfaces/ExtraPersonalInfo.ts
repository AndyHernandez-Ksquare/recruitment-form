import { FormikErrors, FormikTouched } from "formik";

export interface ExtraPersonalInfoValues {
  phone: string;
  email: string;
  altEmail: string;
  howDiscoveredUs: string;
  howDiscoveredUsOther?: string;
  mostLikeSD: string;
  highestDegree: string;
  highestDegreeOther?: string;
  universityName?: string;
  universityCity?: string;
  universityState?: string;
  universityCountry?: string;
  nameOfDegree?: string;
  finishedDegree?: string;
  proofOfDegree?: string;
  proffesionalLicense?: string;
  proofOfLicense?: string;
  scholarship?: string;
  scholarshipLevel?: string;
  scholarshipKind?: string;
  scholarshipDuration?: number | null;
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
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<ExtraPersonalInfoValues>>;
  setFieldTouched: (
    field: string,
    touched?: boolean | undefined,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<ExtraPersonalInfoValues>>;
}

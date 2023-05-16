import { FormikErrors, FormikTouched } from "formik";

export interface SkillsValues {
  knowProgrammingLanguage: string;
  amountOfExperience: string;
  disabilities: string;
}

export interface SkillsProps {
  errors: FormikErrors<SkillsValues>;
  touched: FormikTouched<SkillsValues>;
  values: SkillsValues;
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T_1 = string | React.ChangeEvent<any>>(field: T_1): T_1;
  };
  handleBlur: {
    (e: React.FocusEvent<any, Element>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
}

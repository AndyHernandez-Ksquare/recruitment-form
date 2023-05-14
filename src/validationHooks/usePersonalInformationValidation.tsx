import { PersonalInformationValues } from "../interfaces/usePersonalInformation";

const PersonalInformationValidation = () => {
  let values: PersonalInformationValues = {
    name: "",
    paternal_last_name: "",
    maternal_last_name: "",
    gender: "",
    preferred_gender: "",
    city: "",
    state: "",
    country: "",
  };

  const validation = (values: PersonalInformationValues) => {
    const errors: Partial<PersonalInformationValues> = {};
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.paternal_last_name) {
      errors.paternal_last_name = "Required";
    }
    if (!values.gender) {
      errors.gender = "Required";
    }

    if (!values.city) {
      errors.city = "Required";
    }

    if (!values.state) {
      errors.state = "Required";
    }
    if (!values.country) {
      errors.country = "Required";
    }

    return errors;
  };

  return { values, validation };
};
export default PersonalInformationValidation;

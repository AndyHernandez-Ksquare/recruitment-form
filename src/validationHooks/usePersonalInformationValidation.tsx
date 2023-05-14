import { PersonalInformationValues } from "../interfaces/PersonalInformation";

const usePersonalInformationValidation = () => {
  let valuesPersonalInformation: PersonalInformationValues = {
    name: "",
    paternal_last_name: "",
    maternal_last_name: "",
    gender: "",
    preferred_gender: "",
    city_birth: "",
    state_birth: "",
    country: "",
  };

  const validationPersonalInformation = (values: PersonalInformationValues) => {
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

    if (!values.city_birth) {
      errors.city_birth = "Required";
    }

    if (!values.state_birth) {
      errors.state_birth = "Required";
    }
    if (!values.country) {
      errors.country = "Required";
    }

    return errors;
  };

  return { valuesPersonalInformation, validationPersonalInformation };
};
export default usePersonalInformationValidation;

import { ExtraPersonalInfoValues } from "../interfaces/ExtraPersonalInfo";

const useExtraPersonalInfoValidation = () => {
  let valuesExtraPersonalInfo: ExtraPersonalInfoValues = {
    phone: "",
    email: "",
    altEmail: "",
    howDiscoveredUs: "",
    howDiscoveredUsOther: "",
  };

  const validationExtraPersonalInfo = (values: ExtraPersonalInfoValues) => {
    const errors: Partial<ExtraPersonalInfoValues> = {};
    if (
      !/^(?:\d{1,3}[-.\s]?|\(\d{1,3}\))?\d{3}[-.\s]?\d{3}[-.\s]?\d{4}(?:\s?x\d{1,5})?$/.test(
        values.phone
      )
    ) {
      errors.phone = "Invalid phone number format (e.g., 1 123-456-7890)";
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.altEmail)) {
      errors.altEmail = "Invalid email address";
    }
    return errors;
  };

  return { valuesExtraPersonalInfo, validationExtraPersonalInfo };
};

export default useExtraPersonalInfoValidation;

import { AddressInformationValues } from "./../interfaces/useAddressInformationValidation";
import { useFormik } from "formik";
const useAddressInformationValidation = () => {
  let valuesAddresslInformation: AddressInformationValues = {
    street: "",
    streetA: "",
    streetB: "",
    colony: "",
    city: "",
    state: "",
    postalCode: "",
    file: "",
  };

  const getFileExtension = (file: string) => {
    // Get the last index of the dot (.) character
    const dotIndex = file.lastIndexOf(".");

    // Extract the extension from the file name
    if (dotIndex !== -1) {
      const extension = file.slice(dotIndex + 1).toLowerCase();
      return extension;
    }

    return "";
  };

  const validationAddressInformation = (values: AddressInformationValues) => {
    const errors: Partial<AddressInformationValues> = {};
    if (!values.street) {
      errors.street = "Required";
    }
    if (!values.streetA) {
      errors.streetA = "Required";
    }
    if (!values.colony) {
      errors.colony = "Required";
    }
    const fileExtension = getFileExtension(values.file);
    if (!["pdf", "jpg", "png"].includes(fileExtension)) {
      errors.file = "Invalid file type. Please upload a PDF, JPG, or PNG file.";
    }
    return errors;
  };

  return { valuesAddresslInformation, validationAddressInformation };
};
export default useAddressInformationValidation;

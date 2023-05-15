import { AddressInformationValues } from "../interfaces/AddressInformation";
import getFileExtension from "../functions/getFileExtension";
const useAddressInformationValidation = () => {
  let valuesAddresslInformation: AddressInformationValues = {
    street: "",
    streetA: "",
    streetB: "",
    colony: "",
    city_current: "",
    state_current: "",
    postalCode: "",
    addressProof: "",
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
    const fileExtension = getFileExtension(values.addressProof);
    if (!["pdf", "jpg", "png"].includes(fileExtension)) {
      errors.addressProof =
        "Invalid file type. Please upload a PDF, JPG, or PNG file.";
    }
    return errors;
  };

  return { valuesAddresslInformation, validationAddressInformation };
};
export default useAddressInformationValidation;

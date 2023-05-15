import React from "react";
import { AddressExtraInfoValues } from "../interfaces/AddressExtraInfo";
import { PersonalInformationValues } from "../interfaces/PersonalInformation";
import getFileExtension from "../functions/getFileExtension";

const useAddressExtraInfoValidation = () => {
  let valuesAddressExtraInfo: AddressExtraInfoValues = {
    residencyType: "",
    residencyTypeOther: "",
    peopleInHouse: "",
    identification: "",
    identificationProof: "",
  };

  const validationAddressExtraInfo = (
    values: AddressExtraInfoValues & PersonalInformationValues
  ) => {
    const errors: Partial<AddressExtraInfoValues> = {};
    if (!values.residencyType) {
      errors.residencyType = "Required";
    }
    if (!values.peopleInHouse) {
      errors.peopleInHouse = "Required";
    }

    if (!values.identification) {
      errors.identification = "Required";
    }

    if (values.country.toLowerCase() === "mexico") {
      if (!/^[A-Z0-9]{18}$/.test(values.identification)) {
        errors.identification = "This is not a valid CURP document";
      }
    } else {
      if (!/^[A-Z]{1}[0-9]{8}$/.test(values.identification)) {
        errors.identification = "This is not a valid passport document";
      }
    }

    const fileExtension = getFileExtension(values.identificationProof);
    if (!["pdf", "jpg", "png"].includes(fileExtension)) {
      errors.identificationProof =
        "Invalid file type. Please upload a PDF, JPG, or PNG file.";
    }

    return errors;
  };

  return { valuesAddressExtraInfo, validationAddressExtraInfo };
};

export default useAddressExtraInfoValidation;

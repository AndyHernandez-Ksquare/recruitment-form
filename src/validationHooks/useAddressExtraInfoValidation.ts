import React from "react";
import { AddressExtraInfoProps } from "../interfaces/AddressExtraInfo";
import { AddressExtraInfoValues } from "../interfaces/AddressExtraInfo";

const useAddressExtraInfoValidation = () => {
  let valuesAddressExtraInfo: AddressExtraInfoValues = {
    residencyType: "",
    residencyTypeOther: "",
    peopleInHouse: "",
  };

  const validationAddressExtraInfo = (values: AddressExtraInfoValues) => {
    const errors: Partial<AddressExtraInfoValues> = {};
    if (!values.residencyType) {
      errors.residencyType = "Required";
    }
    if (!values.peopleInHouse) {
      errors.peopleInHouse = "Required";
    }

    return errors;
  };

  return { valuesAddressExtraInfo, validationAddressExtraInfo };
};

export default useAddressExtraInfoValidation;
